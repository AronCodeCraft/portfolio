# Aron A — Developer & Data Portfolio

A modern, responsive, and minimalist personal portfolio website built with **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**.

Designed specifically for **Aron A** — an undergraduate Computer Science Engineering student specializing in Data Science at **RNS Institute of Technology (RNSIT)** and aspiring Data Analyst.

---

## 🎨 Visual Aesthetics & Palette

- **Canvas & Theme**: Soothing warm creamy-gray (`#F3EFEA` / `#EFECE6`), carefully calibrated to be easy on the eyes (avoiding both stark glare and dark themes).
- **Surfaces & Cards**: Elevated alabaster cream (`#FAF8F5`) with delicate warm stone borders (`#E2DDD5`) and subtle depth.
- **High-Contrast Readability**: Deep charcoal slate (`#181E24` and `#11161B`) for primary text and headings, ensuring **WCAG AAA high contrast**.
- **Accents**: Deep teal (`#0D9488` / `#0F766E`) for skill tags, indicators, and links.
- **Typography**: Google Fonts pairing of **Plus Jakarta Sans** (headings) + **Inter** (body copy) + **JetBrains Mono** (technical badges and metrics).

---

## 📁 Project Architecture

```
aron-portfolio/
├── index.html                   # HTML entrypoint, Google Fonts, OpenGraph metadata
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Custom creamy-gray theme, typography, soft shadows
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Root layout composing all sections
│   ├── index.css                # Tailwind directives, custom scrollbar, data-grid motif
│   ├── types/
│   │   └── portfolio.ts         # Strictly typed TypeScript data interfaces
│   ├── data/
│   │   └── portfolioData.ts     # ⭐ SINGLE SOURCE OF TRUTH (Profile, Skills, Projects, Timeline, Blog)
│   └── components/
│       ├── Navbar.tsx           # Sticky nav with blur, section anchors, resume status, mobile drawer
│       ├── Hero.tsx             # Editorial headline, academic badge, direct CTAs, student profile card
│       ├── About.tsx            # Academic context at RNSIT, data philosophy, 4 core pillars
│       ├── Skills.tsx           # Categorized tools (Python, NumPy, Pandas, MySQL, Supabase, Excel, VS Code)
│       ├── Projects.tsx         # Category filter pills, status tags, GitHub links, and case study buttons
│       ├── ProjectModal.tsx     # Deep-dive analytical case study modal (Problem, Objectives, Findings)
│       ├── Timeline.tsx         # Education & milestone timeline (RNSIT coursework, applied projects)
│       ├── Blog.tsx             # "My Data Journey" / "Learning in Public" technical note cards
│       ├── ArticleModal.tsx     # Clean reading view for technical notes and reflections
│       ├── Contact.tsx          # Direct contact cards, 1-click "Copy Email" with toast, interactive form
│       ├── ResumeModal.tsx      # Graceful resume status modal with direct email request
│       ├── SocialIcons.tsx      # Crisp, branded SVG icons for GitHub and LinkedIn
│       └── Footer.tsx           # Quick links, social handles, and build credits
```

---

## 🚀 Running Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

3. **Create a production build**:
   ```bash
   npm run build
   ```
   Generates optimized assets inside the `dist/` directory.

---

## ✍️ How to Update Your Content Later

You **never** need to modify complex HTML, CSS, or layout code to update your website.  
All your information is stored cleanly in:  
📁 `src/data/portfolioData.ts`

### 1. Adding a New Skill (e.g. Scikit-Learn or Power BI)
Open `src/data/portfolioData.ts`, find `skillGroups`, and add your new tool:
```typescript
{
  name: "Scikit-Learn",
  level: "In Progress", // 'Core' | 'Known' | 'Basic' | 'Exploring'
  description: "Machine learning models: regression, classification, clustering, and cross-validation."
}
```

### 2. Adding a New Project (e.g. an ML Dashboard or Streamlit app)
Add an item to the `projects` array:
```typescript
{
  id: "customer-churn-ml",
  title: "Customer Churn Prediction Model",
  category: "Data Analytics",
  status: "Completed",
  description: "End-to-end ML classification pipeline predicting telecom customer churn.",
  problemStatement: "High subscriber turnover required predictive churn flags prior to contract renewal.",
  objectives: ["Train Random Forest classifier", "Analyze feature importance"],
  methodology: ["Feature engineering with Pandas", "Model evaluation with ROC-AUC"],
  keyFindings: ["Identified contract length and payment type as top churn drivers."],
  tools: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
  githubUrl: "https://github.com/AronCodeCraft/customer-churn",
  demoUrl: "https://aron-churn-app.streamlit.app",
  featured: true
}
```

### 3. Adding Your Real Resume PDF
When your resume PDF is ready:
1. Save your file as `resume.pdf` inside the `public/` directory (`public/resume.pdf`).
2. Now anyone clicking your resume button can directly download `resume.pdf`!

---

## 🌐 How to Deploy to a Public Domain

### Option A: Deploy on Vercel (Recommended - 100% Free)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Aron A portfolio"
   git branch -M main
   git remote add origin https://github.com/AronCodeCraft/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** $\rightarrow$ **"Project"**.
   - Select your `portfolio` repository and click **Deploy**.
   - Your site will be live at `https://aron-portfolio.vercel.app` in under 45 seconds!

### Option B: Deploy on GitHub Pages (100% Free)
- Go to your repository settings on GitHub $\rightarrow$ **Pages** $\rightarrow$ select **GitHub Actions** and choose the Vite workflow template.

---

## 🎓 Connecting Your Free Domain (GitHub Student Developer Pack)

Through your **GitHub Student Developer Pack**:
1. Claim your free **1-year `.me` domain** from **Namecheap** or **Name.com** (e.g., `arona.me` or `aroncodecraft.me`).
2. In your Vercel Dashboard, go to **Settings** $\rightarrow$ **Domains** $\rightarrow$ enter your domain (e.g., `arona.me`).
3. Add the two DNS records shown by Vercel into your domain registrar's DNS settings:
   - **A Record**: Host `@` $\rightarrow$ Points to `76.76.21.21`
   - **CNAME**: Host `www` $\rightarrow$ Points to `cname.vercel-dns.com`
4. Within minutes, your portfolio is accessible worldwide at your personal domain with automatic free HTTPS!
