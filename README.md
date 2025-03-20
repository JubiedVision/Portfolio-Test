# Personal Portfolio

A modern portfolio website built with React, Vite, and Express, optimized for Netlify deployment.

## Features

- Responsive design built with Tailwind CSS
- Interactive UI with Framer Motion animations
- Form handling with Netlify Forms
- API routing with Netlify Functions

## Getting Started

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. The site will be available at http://localhost:3000

### Building for Production

```
npm run build
```

This will create optimized files in the `dist` directory.

## Deploying to Netlify

### Method 1: Deploy from Git

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Netlify account
3. Click "New site from Git"
4. Choose your repository and branch
5. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
6. Click "Deploy site"

### Method 2: Manual Deploy

1. Build your site locally:
   ```
   npm run build
   ```
2. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```
3. Login to your Netlify account:
   ```
   netlify login
   ```
4. Initialize the site:
   ```
   netlify init
   ```
5. Deploy the site:
   ```
   netlify deploy --prod
   ```

## Form Handling

The contact form is set up to work with Netlify Forms. When a user submits the form:

1. The data is automatically captured by Netlify
2. You'll receive email notifications (configure in the Netlify dashboard)
3. You can view all submissions in the Netlify dashboard
4. The form includes a honeypot field to reduce spam

## Environment Variables

If you need to use environment variables, add them in the Netlify dashboard under:
Site settings > Build & deploy > Environment variables 