# Mahesh Chilukamari Portfolio

A complete modern portfolio website for **Mahesh Chilukamari**, built as a responsive static site for GitHub Pages.

## Folder Structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.png
    └── RESUME.pdf
```

## Sections

- Home
- About
- Skills
- Projects
- Experience
- My Journey
- Education
- Certifications
- Contact

## Features

- Dark modern professional theme
- Pink/red and orange accent palette
- Responsive layout
- Sticky navbar
- Smooth scrolling
- Animated hero section
- Scroll reveal effects
- Vertical timeline animation for My Journey
- Project cards with tech stack badges
- EmailJS-powered contact form with sending, success, and error states
- Font Awesome icons
- Google Fonts

## Replace Placeholders

1. Replace the general GitHub profile links on each project card with the matching repository URLs.
2. Replace the `#` live demo links in `index.html` with real demo URLs.

## Enable Direct Contact Form Emails

The form is integrated with EmailJS. Complete these steps once to send messages directly to your inbox:

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. In **Email Services**, connect Gmail or another email provider and copy the **Service ID**.
3. In **Email Templates**, create a contact template and copy the **Template ID**.
4. Set the template's **To Email** to `mahesh.chilukamari0901@gmail.com`.
5. Use these template variables:

```text
Sender name: {{from_name}}
Sender email: {{reply_to}}
Message: {{message}}
```

6. Set the template's **Reply-To** field to `{{reply_to}}`.
7. Copy the **Public Key** from the EmailJS Account page.
8. Open `script.js` and replace:

```js
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
};
```

Only use the EmailJS Public Key in frontend code. Do not add a private key.

## GitHub Pages Deployment

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder to the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Click **Save**.
7. Open the generated GitHub Pages URL after deployment completes.

## Local Preview

Open `index.html` in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```
