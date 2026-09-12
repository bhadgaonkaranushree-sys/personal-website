# Anushree — Mandela Art Website

A minimalistic, chic personal website for teaching Mandela art to kids in the community.

## What's included

- **Hero** — animated Mandela SVG + introduction
- **About** — your photo and bio
- **Gallery** — artwork grid with local image preview
- **Schedule** — weekly session timings and availability
- **Book a Slot** — enquiry form
- **Contact** — email and phone

---

## How to personalise

### 1. Your details
Open `index.html` and update:
- Your name (search for "Anushree")
- Your email: `your@email.com`
- Your phone: `+91 00000 00000`
- Your bio in the About section

### 2. Your photo
Replace the placeholder in the About section:
```html
<!-- Find this: -->
<div class="about-img-placeholder"><span>Your photo here</span></div>

<!-- Replace with: -->
<div class="about-img-wrap">
  <img src="public/artwork/your-photo.jpg" alt="Anushree" style="width:300px;height:360px;object-fit:cover;" />
</div>
```

### 3. Artwork gallery
Add your images to `public/artwork/` then replace the placeholder cards in `index.html`:
```html
<div class="gallery-card">
  <img src="public/artwork/mandela1.jpg" alt="Mandela piece 1" />
</div>
```

### 4. Schedule
Update the session rows in the `#schedule` section. Change `open` to `full` for booked-out slots.

---

## Deploy to Vercel

1. Push this folder to your GitHub repo (`bhadgaonkaranushree-sys/personal-website`)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Leave all settings as default (it's a static site)
5. Click **Deploy** — your site will be live in ~30 seconds!

Vercel will automatically redeploy every time you push to GitHub.
