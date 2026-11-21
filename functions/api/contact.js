// Cloudflare Pages Function: POST /api/contact
// Verifies Turnstile, then emails the submission through Resend.
// Secrets (set in Cloudflare Pages > Settings > Variables and secrets, never in code):
//   RESEND_API_KEY       Resend API key
//   TURNSTILE_SECRET_KEY Turnstile secret (optional until Turnstile is set up)
//   CONTACT_TO           Inbox that receives messages, e.g. hello@stratlearn.co
//   CONTACT_FROM         Verified sender, e.g. "STRATLEARN Website <website@stratlearn.co>"

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function onRequestPost({ request, env }) {
  let form;
  try { form = await request.formData(); } catch { return json({ ok: false, error: 'bad_request' }, 400); }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (form.get('website')) return json({ ok: true });

  const name = (form.get('name') || '').toString().trim().slice(0, 200);
  const email = (form.get('email') || '').toString().trim().slice(0, 200);
  const company = (form.get('company') || '').toString().trim().slice(0, 200);
  const topic = (form.get('topic') || '').toString().trim().slice(0, 100);
  const message = (form.get('message') || '').toString().trim().slice(0, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'invalid' }, 400);
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: (form.get('cf-turnstile-response') || '').toString(),
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    }).then((r) => r.json()).catch(() => ({ success: false }));
    if (!verify.success) return json({ ok: false, error: 'captcha' }, 403);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return json({ ok: false, error: 'not_configured' }, 500);
  }

  const html = `
    <h2>New website enquiry: ${esc(topic)}</h2>
    <p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Company:</b> ${esc(company) || '—'}</p>
    <p style="white-space:pre-wrap">${esc(message)}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `Website: ${topic || 'Enquiry'} from ${name}`,
      html,
    }),
  });

  if (!res.ok) return json({ ok: false, error: 'send_failed' }, 502);
  return json({ ok: true });
}
