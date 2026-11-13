# Mahesh Chilukamari | Data Engineer Portfolio

Responsive, buildless HTML/CSS/JavaScript portfolio for GitHub Pages. The site presents Azure data engineering experience, a reproducible Python/SQL ETL project, supporting projects, education, and PDF-listed credentials.

The opening section highlights Mahesh's current HCLTech role, Azure stack, completed UNT master's degree, and documented HCLTech/HDFC results. The current design uses a light background with deep green accents. CSS and JavaScript URLs include a release version so browsers request updated assets after publication.

## Repository relationship

- `maheshchilukamari/Portfolio` hosts this website at [maheshchilukamari.github.io/Portfolio](https://maheshchilukamari.github.io/Portfolio/).
- `maheshchilukamari/maheshchilukamari` controls the separate GitHub profile README. Updating one repository does not update the other.

## Edit and preview

- `index.html`: all visible content, navigation, contact links, and SEO/social metadata.
- `style.css`: responsive layout, colors, focus styles, and reduced-motion support.
- `script.js`: navigation, active sections, reveal observer, current year, and EmailJS contact behavior.
- `assets/profile.png`: existing portrait.
- `assets/RESUME.pdf`: legacy resume, retained but deliberately unlinked because it conflicts with the supplied current profile. Replace it with an approved current resume before restoring a resume download.

No package install, bundler, or compilation is required. From the repository root, run:

```sh
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). External Google Fonts, Font Awesome, and the EmailJS SDK require network access. Body text remains visible without JavaScript.

## Contact form

The existing public EmailJS service ID, template ID, and public key remain in `script.js`. No private key belongs in this repository. The published email links now use `mahesh.chilukamari13@gmail.com`, the address in the supplied profile.

Before publishing, check the existing EmailJS template's **To Email** in your dashboard: the template recipient cannot be verified from this repository. It must route to the intended inbox. Template fields are `from_name`, `reply_to`, and `message`. No test email was sent during this audit. The direct email link works independently of EmailJS.

## Publish through GitHub Pages

1. Review the local diff and the accompanying audit report.
2. Create a feature branch, commit `index.html`, `style.css`, `script.js`, and this README, and push that branch when ready.
3. Open and merge a pull request into this repository's publishing branch.
4. In **Settings → Pages**, preserve the existing publishing source. For the original buildless layout, the branch source is normally `main` and `/ (root)`; verify the actual setting before changing it. There is no tracked custom deployment workflow in this checkout.
5. Wait for the Pages deployment to complete, then check the live website, mobile navigation, project links, and contact route.

Publish the profile README separately in `maheshchilukamari/maheshchilukamari`. Its optional contribution-snake workflow publishes to `output`; that branch is unrelated to this website.

