# 💗 Happy Mother's Day — Interactive Website

A beautiful, cinematic, and emotional interactive website dedicated to Mom. Built with React + Vite + Tailwind CSS + Framer Motion.

---

## ✨ Features

- 🎬 Cinematic loading screen with animated progress
- 🌸 7 beautifully animated chapters / pages
- 💕 Floating petals, hearts, and sparkle particles
- 🃏 Flip-card interactions with confetti bursts
- ⌨️ Typewriter text effects
- 🎵 Background music toggle
- 🗺️ Dot navigation + mobile hamburger menu
- 🥚 Hidden easter eggs
- 📱 Fully responsive — mobile, tablet, desktop
- ✨ Framer Motion page transitions throughout

---

## 🗂️ Project Structure

```
mothers-day/
├── public/
│   └── heart.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FloatingPetals.jsx   # Animated background particles
│   │   ├── LoadingScreen.jsx    # Intro loading animation
│   │   ├── MusicToggle.jsx      # Background music button
│   │   └── Navigation.jsx       # Dot nav + mobile menu
│   ├── hooks/
│   │   ├── useTypewriter.js     # Typewriter text effect hook
│   │   └── useScrollReveal.js   # Scroll-triggered reveal hook
│   ├── pages/
│   │   ├── WelcomePage.jsx      # Page 1 — Hero intro
│   │   ├── ReasonsPage.jsx      # Page 2 — Flip cards
│   │   ├── MemoriesPage.jsx     # Page 3 — Timeline scrapbook
│   │   ├── FunnyPage.jsx        # Page 4 — Funny moments
│   │   ├── ThankYouPage.jsx     # Page 5 — Dark cinematic thanks
│   │   ├── PromisesPage.jsx     # Page 6 — Promise cards
│   │   └── FinalPage.jsx        # Page 7 — Emotional ending
│   ├── utils/
│   │   └── helpers.js           # Confetti, rand, etc.
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🖥️ Local Development

### Prerequisites
- Node.js 18+ installed
- npm 9+

### Setup

```bash
# 1. Clone or download the project
cd mothers-day

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🚀 Deploy to Render.com

### Step-by-Step Instructions

1. **Push to GitHub**
   - Create a new GitHub repository
   - Push the entire project folder to it:
   ```bash
   git init
   git add .
   git commit -m "Happy Mother's Day website"
   git remote add origin https://github.com/YOUR_USERNAME/mothers-day.git
   git push -u origin main
   ```

2. **Create a Render Account**
   - Go to [render.com](https://render.com) and sign up / log in

3. **New Static Site**
   - Click **"New +"** → **"Static Site"**
   - Connect your GitHub account if prompted
   - Select your repository

4. **Configure Build Settings**

   | Setting              | Value         |
   |----------------------|---------------|
   | **Name**             | mothers-day   |
   | **Branch**           | main          |
   | **Build Command**    | `npm run build` |
   | **Publish Directory**| `dist`        |

5. **Click "Create Static Site"**
   - Render will automatically install dependencies and build
   - Your site will be live at `https://mothers-day.onrender.com` (or similar)

6. **Auto-deploy on push**
   - Every time you push to `main`, Render will automatically redeploy

### Render Environment Notes
- No environment variables required
- No server-side features used — pure static build
- Build time: ~60–90 seconds

---

## 🎨 Personalization Guide

### Change the reasons (Page 2)
Edit the `REASONS` array in `src/pages/ReasonsPage.jsx`

### Change the memories (Page 3)
Edit the `MEMORIES` array in `src/pages/MemoriesPage.jsx`

### Change the funny moments (Page 4)
Edit the `FUNNY_MOMENTS` array in `src/pages/FunnyPage.jsx`

### Change the promises (Page 6)
Edit the `PROMISES` array in `src/pages/PromisesPage.jsx`

### Add background music
Place an `mp3` file in `/public/music.mp3` and update the `MUSIC_URL` in `src/components/MusicToggle.jsx`:
```js
const MUSIC_URL = '/music.mp3'
```

### Change colors
Edit `tailwind.config.js` → `theme.extend.colors`

---

## 🥚 Easter Eggs
- Click the `✦` symbol in the bottom-left of the Welcome page
- Click the "Our Funny Moments" title 5 times on Page 4
- Discover more hidden throughout the journey 💕

---

## 📄 License
Made with love. Free to use and personalize for your Mom. 💗
