# Derek Wenning academic website starter

This is a GitHub Pages-ready starter site designed as a modern replacement for a Google Sites academic homepage.

## Included

- Responsive one-page academic website
- Indiana-inspired crimson accent palette
- Sticky navigation
- Light/dark mode toggle
- Publication filter buttons
- Clean sections for About, Research, Teaching, and Contact
- Easy-to-edit static files

## Files

- `index.html` — main site content
- `style.css` — visual design
- `script.js` — theme toggle and publication filters
- `assets/` — place your CV, headshot, papers, syllabi, and slide files here

## Quick start on GitHub Pages

1. Create a new public repository on GitHub. A good option is `derekwenning.github.io`.
2. Upload all files from this folder to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Save. GitHub Pages will publish the site.

## Using your custom domain

If you want to continue using `www.derekwenning.com`:

1. In GitHub Pages settings, enter the custom domain.
2. Create a file named `CNAME` in the repository root containing:

   ```
   www.derekwenning.com
   ```

3. Update DNS at your domain registrar to point the domain to GitHub Pages.
4. Once DNS resolves, enable HTTPS in GitHub Pages settings.

## Content to update immediately

- Replace `assets/Derek_Wenning_CV.pdf` with your actual CV file
- Add working paper links in `index.html`
- Update Google Scholar link to your actual profile URL
- Add office location and mailing details in the contact section
- Optionally add a headshot or hero image

## Recommended next upgrades

- Split Research, Teaching, and CV into separate pages
- Add a News section for talks, awards, and media
- Add a simple YAML/JSON file to store publication metadata
- Migrate later to Jekyll or Quarto if you want templated content
