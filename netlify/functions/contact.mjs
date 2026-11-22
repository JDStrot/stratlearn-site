// Netlify Function: POST /api/contact
// Same logic as functions/api/contact.js (Cloudflare), so the site works on either host.
// Set RESEND_API_KEY, CONTACT_TO, CONTACT_FROM and (optional) TURNSTILE_SECRET_KEY in
// Netlify > Site configuration > Environment variables.
import { onRequestPost } from '../../functions/api/contact.js';

export default async (request) => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  return onRequestPost({ request, env: process.env });
};

export const config = { path: '/api/contact' };
