// Lottie Courses content, from Jesse's website-copy.md (sections 2 to 4).
// Keep the facts and the "coming soon" wording as written.
// Don't add "OSHA certified", "compliant" or "meets legal requirements".

const IMG = '/lottie/';

export const lottieIntro = {
  eyebrow: 'Lottie Courses by STRATLEARN',
  headline: 'Training your crew will actually finish.',
  subhead:
    'Short, game-style courses in English and Spanish, built for frontline teams on their phones. Five to eight minutes, real situations, and a pearl at the end.',
  image: { src: IMG + 'phone-1-title-screen.jpg', alt: 'Phone showing the start screen of the course Find Your Leadership Style' },
};

export const proof = [
  { big: '300+', small: 'courses' },
  { big: '2', small: 'languages in every course (EN | ES)' },
  { big: '5–8 min', small: 'per course' },
  { big: '25', small: 'industry packs' },
];

export const features = [
  {
    title: 'Feels like a game, teaches like a trainer.',
    body: "Every course is a run of quick taps, checks and mini-games with instant feedback. People stay with it because it's fun, and it sticks because they practice.",
    image: { src: IMG + 'phone-3-instant-feedback.jpg', alt: 'Phone showing a quiz answer marked correct with +10 XP' },
    kind: 'phone',
  },
  {
    title: 'English and Spanish, one tap apart.',
    body: 'Every course has an EN | ES switch built in. No separate versions to manage.',
    image: { src: IMG + 'phone-5-spanish.jpg', alt: 'Phone showing the same course in Spanish' },
    kind: 'phone',
  },
  {
    title: 'Made for the people on the floor.',
    body: 'Phone-first, easy to read, and short enough for a break. Real shift moments, plain words, no lectures.',
    image: { src: IMG + 'phone-2-lesson-map.jpg', alt: 'Phone showing a course map of short lessons with Lottie the axolotl' },
    kind: 'phone',
  },
  {
    title: 'Pearls, streaks and a real certificate.',
    body: "Finish a course and Lottie hands over a pearl. Ace it and it's golden. A printable certificate backs it up.",
    image: { src: IMG + 'lottie-golden-pearl.png', alt: 'Lottie with star eyes holding a golden pearl' },
    kind: 'character',
  },
];

export const lottie = { src: IMG + 'lottie-pearl.png', alt: 'Lottie the pink axolotl holding a pearl badge' };

export const meetLottie = {
  eyebrow: 'Meet your guide',
  headline: 'Meet Lottie. She never stops growing.',
  body: [
    "Lottie is an axolotl, and axolotls never stop growing. They can even regrow what they lose.",
    "That's the idea behind every course. Learning isn't a box you check once. Lottie coaches your crew through every lesson, so they keep growing too, one short course at a time.",
  ],
};

export const freePreview = {
  headline: 'Try a free course: Find Your Leadership Style',
  body: 'Six quick rounds built from real shift moments. Find your go-to style and your stretch style, then see the five styles every great lead can use. About 6 minutes, no sign-up, in English or Spanish.',
  image: { src: IMG + 'course-art-find-your-leadership-style.jpg', alt: 'Find Your Leadership Style course artwork' },
};

export const previewShots = [
  { src: IMG + 'phone-1-title-screen.jpg', alt: 'Phone showing the start screen of the course Find Your Leadership Style' },
  { src: IMG + 'phone-4-flip-cards.jpg', alt: 'Phone showing flip cards for five leadership styles' },
];

export const courses = [
  { slug: 'find-your-leadership-style', category: 'Leadership', title: 'Find Your Leadership Style', time: '6 min', free: true,
    synopsis: 'Find your go-to and stretch styles with a quick style finder built from real shift moments.' },
  { slug: 'active-listening', category: 'Workplace skills', title: 'Active Listening', time: '7 min',
    synopsis: 'Most of us listen just long enough to answer. Learn to really hear customers, coworkers and your manager.' },
  { slug: 'group-chat-drama', category: 'Workplace skills', title: 'Group Chat Drama', time: '7 min',
    synopsis: 'Work chats can go from memes to meltdown in three messages. How to text so it lands, and how to cool it down.' },
  { slug: 'coaching-your-crew', category: 'Managers', title: 'Coaching Your Crew', time: '7 min',
    synopsis: 'Give praise that sticks, fix problems without drama, and teach a task so it lands.' },
  { slug: 'fire-safety', category: 'Workplace safety', title: 'Fire Safety', time: '7 min',
    synopsis: 'How fires start, how to stop them, how to use an extinguisher, and when to just get out.' },
  { slug: 'anatomy-basics-trainers', category: 'Fitness pros', title: 'Anatomy Basics for Trainers', time: '7 min',
    synopsis: 'The big muscle groups, how joints move and why the spine curves, so trainers coach smarter and safer.' },
].map((c) => ({ ...c, image: { src: `${IMG}course-art-${c.slug}.jpg`, alt: `${c.title} course artwork` } }));

export const packs = {
  headline: 'A ready-made path for your industry.',
  body: 'Each pack gives every role an ordered path: core safety and skills, required training, add-ons, and a Shift Leads and Managers path.',
  chips: ['Restaurants', 'Retail', 'Grocery', 'Hotels', 'Warehouse and Delivery', 'Fitness and Gyms', 'Child Care', 'Healthcare Support', 'Senior Living', 'Construction', 'Cleaning and Facilities', 'Schools', 'and more'],
};

export const platform = {
  headline: 'The platform: coming soon',
  body: "We're building a simple home for all of it.",
  items: [
    'Log in with a QR code or PIN. No email needed.',
    'Assign courses by role and location.',
    "Automatic reminders and retraining on each state's schedule.",
    'Audit-ready completion reports and a manager dashboard.',
    'SCORM export if you already have an LMS.',
  ],
};

export const closing = { headline: 'See it for yourself in six minutes.' };

// Pricing, from Jesse's "STRATLEARN Pricing Recommendation" doc (2026-11-21).
// Platform features are still "coming soon": keep that wording on any plan that mentions them.
export const pricing = {
  eyebrow: 'Pricing',
  headline: 'Simple pricing. Spanish included.',
  sub: 'Every course comes in English and Spanish at no extra cost, with badges and printable certificates. Seats are reusable: when someone leaves, their seat moves to the new hire.',
  founding: {
    label: 'Founding offer',
    text: 'Pro at $35 per learner per year, locked for 2 years. For our first 50 customers.',
    cta: 'Claim a founding spot',
    topic: 'Founding offer',
  },
  plans: [
    {
      name: 'Small Team', price: '$890', unit: 'per year, flat', note: 'Up to 25 learners',
      items: ['Everything in Pro', 'One flat price, no seat counting', 'Great for a single gym, café or shop'],
      cta: 'Get Small Team', topic: 'Lottie Courses',
    },
    {
      name: 'Essentials', price: '$29', unit: 'per learner per year', note: 'Minimum 10 learners',
      items: ['Required training and core safety courses', 'One industry pack', 'Extra packs $10 per learner per year'],
      cta: 'Get Essentials', topic: 'Lottie Courses',
    },
    {
      name: 'Pro', price: '$49', unit: 'per learner per year', note: 'Minimum 10 learners', featured: true,
      items: ['Every course and all 25 industry packs', 'Role paths, plus the Shift Leads and Managers path', 'Refreshers, soft skills and leadership', 'Manager dashboard and reminders: coming soon'],
      cta: 'Get Pro', topic: 'Lottie Courses',
    },
    {
      name: 'Enterprise', price: 'From $5,000', unit: 'per year', note: '250+ learners',
      items: ['Everything in Pro', 'Custom branding and a named contact', 'Multi-year terms', 'SCORM export and policy upload: coming soon'],
      cta: 'Talk to us', topic: 'Lottie Courses',
    },
  ],
  extras: [
    'Monthly billing: Essentials $3.49, Pro $5.99 per learner per month, billed only for active learners.',
    'Single courses: $12 per learner, $19 for state-mandated courses.',
    'Free forever: Find Your Leadership Style.',
  ],
};
