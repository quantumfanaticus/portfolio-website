# Karthik Miryala - Portfolio Website

This is a personal portfolio website built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

## Features

- Responsive design for all devices
- Contact form with EmailJS integration
- reCAPTCHA protection
- Animated components with Framer Motion
- Mobile-friendly navigation

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `out` directory.

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import your project to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

For other deployment platforms, make sure to:

1. Set up the required environment variables
2. Configure the platform to use Node.js 18.x or later
3. Set the build command to `npm run build` or `yarn build`
4. Set the output directory to `out`

## Environment Variables

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your reCAPTCHA site key

## Technologies Used

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service
- [reCAPTCHA](https://www.google.com/recaptcha) - Form protection
- [Heroicons](https://heroicons.com/) - Icon library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
