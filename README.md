# Baroque Invites — Luxury Wedding Stationery

A complete, production-ready Next.js 15 website for **Baroque Invites**, a luxury wedding invitation studio based in Pakistan. Built with App Router, TypeScript, Tailwind CSS v4, Framer Motion, Sanity CMS, and Resend email.

---

## 🚀 Local Setup

### Prerequisites
- Node.js 18+ 
- npm 9+

### 1. Clone & Install

```bash
git clone https://github.com/your-username/baroque-invites.git
cd baroque-invites
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and fill in your credentials (see sections below for how to get each key).

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

---

## 🖼️ How to Add Images to Sanity (Client Guide)

Adding your invitation photos to the website is easy — no coding required!

### Step 1: Create a Sanity Account & Project
1. Go to [sanity.io](https://sanity.io) and sign up for a free account
2. Click **"New Project"** → give it a name like "Baroque Invites"
3. Choose the **free plan** (the free tier is plenty for a gallery site)
4. Copy your **Project ID** (looks like: `abc123de`) from the project dashboard

### Step 2: Configure Environment Variables
In your `.env.local` file, set:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123de   ← your Project ID here
NEXT_PUBLIC_SANITY_DATASET=production
```

### Step 3: Deploy the Studio
The Sanity Studio is built into the website. After deploying to Vercel, go to:
```
https://your-site.vercel.app/studio
```

### Step 4: Add a Gallery Image
1. In the Studio, click **"Gallery Image"** in the left sidebar
2. Click **"+ New Gallery Image"**
3. Fill in:
   - **Title**: e.g. "Royal Gold Foil Invitation"
   - **Gallery Type**: Choose "Invites" or "Boxes"
   - **Category**: e.g. "Royal", "Acrylic", "Favor Box"
   - **Image**: Click to upload your photo (JPG, PNG, WEBP)
   - **Alt Text**: Brief description (for accessibility & SEO)
   - **Display Order**: Lower number = appears first
   - **Featured**: Tick for "New Arrival" highlight
4. Click **"Publish"** — the image appears on your website within 1 hour (ISR cache)

> **Tip:** To see changes immediately, go to your Vercel dashboard → your project → **Deployments** → **Redeploy**.

---

## 📸 How to Get Instagram Access Token

1. Go to [developers.facebook.com](https://developers.facebook.com) and log in
2. Click **My Apps** → **Create App** → choose **Consumer** → Next
3. Add the **Instagram Basic Display** product
4. Under **Instagram Basic Display** → **Basic Display**, click **Create New App**
5. Add `https://localhost/` as a valid OAuth redirect URI
6. Under **User Token Generator**, click **Generate Token** and log in with your Instagram account
7. Copy the token — it's valid for 60 days
8. Add to `.env.local`: `INSTAGRAM_ACCESS_TOKEN=your_token_here`

> **Note:** Refresh your token every 60 days, or set up a cron job to call the refresh endpoint automatically.

📖 Official docs: [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)

---

## 📧 How to Get Resend API Key

1. Go to [resend.com](https://resend.com) and create a free account
2. Verify your sending domain (`baroqueinvites.com`) under **Domains** → **Add Domain**
   - Add the DNS records they give you to your domain registrar
3. Go to **API Keys** → **Create API Key**
4. Copy the key and add to `.env.local`: `RESEND_API_KEY=re_xxxxxxxxxxxx`

> The free plan allows 3,000 emails/month — more than enough for an inquiry form.

---

## ☁️ How to Deploy to Vercel

### Option A: One-Click Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/baroque-invites)

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Environment Variables on Vercel
After creating the project on Vercel:
1. Go to your project → **Settings** → **Environment Variables**
2. Add all variables from `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `RESEND_API_KEY`
   - `INSTAGRAM_ACCESS_TOKEN`
3. Click **Save** then **Redeploy**

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| React 19 | UI |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion 12 | Animations |
| Embla Carousel | Hero slider |
| yet-another-react-lightbox | Image lightbox |
| react-countup | Animated counters |
| React Hook Form + Zod | Form validation |
| Resend | Transactional email |
| Sanity CMS | Content management |
| Lucide React | Icons |

---

## 📁 Project Structure

```
baroque-invites/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (sidebar, mobile nav, footer)
│   ├── page.tsx            # Home page (server component, ISR)
│   ├── globals.css         # Global styles, Tailwind, fonts
│   ├── privacy-policy/     # Privacy policy page
│   ├── studio/             # Sanity Studio embedded route
│   └── api/contact/        # Contact form API (Resend)
├── components/
│   ├── layout/             # Sidebar, MobileNav, Footer
│   ├── sections/           # Page sections (Hero, Galleries, Stats, etc.)
│   └── ui/                 # Reusable UI components
├── lib/                    # Sanity client, queries, email helper
├── sanity/                 # Sanity Studio config and schemas
└── public/                 # Static assets
```

---

## 🎨 Brand Tokens

| Token | Value |
|---|---|
| `--gold` | `#C9A84C` |
| `--gold-light` | `#E8D48B` |
| `--charcoal` | `#1A1A1A` |
| `--cream` | `#FAF7F2` |
| `--dark` | `#0F0F0F` |

Fonts: **Cormorant Garamond** (headings) · **Poppins** (body/nav)

---

## 📄 License

© 2025 Baroque Invites. All rights reserved.
