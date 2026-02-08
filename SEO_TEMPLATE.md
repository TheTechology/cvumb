# SEO Meta Tag Template for New Project Pages

Use this template when creating new project case study pages to maintain consistent SEO optimization.

---

## HTML Head Template

```html
<!doctype html>
<html lang="ro">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  
  <!-- CUSTOMIZE THESE FOR EACH PROJECT -->
  <title>[PROJECT_NAME] - Case Study | Marian Dumitru Portfolio</title>
  <meta name="description" content="[PROJECT_NAME] case study: [BRIEF_PROBLEM]. [BRIEF_SOLUTION]. [KEY_TECH]. Results: [METRIC]. From Marian Dumitru's professional portfolio." />
  <meta name="keywords" content="[PROJECT_NAME], case study, [TECH1], [TECH2], [TECH3], [CATEGORY], Marian Dumitru, portofoliu, professional case study" />
  
  <!-- KEEP THESE CONSISTENT -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <meta name="author" content="Marian Dumitru" />
  <link rel="canonical" href="https://marian-cv-premium.pages.dev/projects/[PROJECT_SLUG].html" />
  
  <!-- SOCIAL SHARING -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="[PROJECT_NAME] Case Study - Marian Dumitru" />
  <meta property="og:description" content="[PROJECT_NAME]: [BRIEF_PROBLEM] → [SOLUTION] → [RESULT]" />
  <meta property="og:locale" content="ro_RO" />
  <meta property="og:site_name" content="Portofoliu Marian Dumitru" />
  <meta property="article:author" content="Marian Dumitru" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="[PROJECT_NAME] - Case Study" />
  <meta name="twitter:description" content="[PROJECT_CATEGORY]: [BRIEF_PROBLEM] → [SOLUTION]" />
  
  <!-- STYLING & FONTS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/styles.css" />
  
  <!-- STRUCTURED DATA - CUSTOMIZE PROJECT DETAILS -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "[PROJECT_NAME] - Case Study",
    "description": "[PROJECT_DESCRIPTION]",
    "url": "https://marian-cv-premium.pages.dev/projects/[PROJECT_SLUG].html",
    "author": {
      "@type": "Person",
      "name": "Marian Dumitru",
      "url": "https://marian-cv-premium.pages.dev/"
    },
    "keywords": ["[TECH1]", "[TECH2]", "[TECH3]", "[CATEGORY]", "[RESULT_TYPE]"],
    "articleBody": "[PROJECT_DESCRIPTION_PARAGRAPH]"
  }
  </script>
</head>
<body>
  <!-- REST OF PAGE CONTENT -->
</body>
</html>
```

---

## Customization Guide

### 1. [PROJECT_NAME]
**Example**: "AI Automations (demo)" or "Fleet Management Dashboard"

### 2. [BRIEF_PROBLEM]
**Example**: "Document processing was manual and time-consuming"
**Length**: 10-15 words max

### 3. [BRIEF_SOLUTION]
**Example**: "Implemented AI-powered summarization and distribution system"
**Length**: 10-15 words max

### 4. [KEY_TECH]
**Example**: "Python backend, React frontend, GPT integration"

### 5. [METRIC]
**Example**: "Reduced manual work by 80%, 2-hour to 10-minute processing"

### 6. [PROJECT_SLUG]
**Example**: "ai-automation", "fleet-management", "site-portal-frontend"
**Rules**: 
- Lowercase
- Hyphens for spaces
- No special characters

### 7. [TECH1], [TECH2], [TECH3]
**Examples**: "JavaScript", "Python", "REST APIs", "UX Design", "Mobile Development"

### 8. [CATEGORY]
**Options**: "Frontend", "Backend", "Mobile", "UX/UI", "AI/Integrations", "Operations"

### 9. [PROJECT_DESCRIPTION]
**Length**: 2-3 sentences
**Format**: Problem → Solution → Result
**Example**: "Automated document processing system that handles sumarization, data extraction, and team distribution. Reduced manual processing time by 80%. Built with Python backend, React frontend, and GPT integration for natural language processing."

---

## Real Example (Completed)

Here's how it looks for the AI Automations project:

```
Title: AI Automations (demo) — Case Study | Marian Dumitru Portfolio
Description: AI Automations case study: Document processing was manual. 
Implemented AI-powered summarization and automation. Python, React, GPT. 
Results: 80% time reduction.

Keywords: AI Automations, case study, document automation, workflow 
automation, system integration, backend frontend, Marian Dumitru

Schema Keywords: ["AI automation", "document processing", "workflow automation", 
"backend development", "frontend development"]
```

---

## SEO Best Practices for Case Studies

### Title Length
- Target: 50-60 characters
- Include: [PROJECT_NAME] + "Case Study" + "Marian Dumitru"

### Description Length
- Target: 150-160 characters
- Include: Problem, Solution, Tech, Result

### Keywords
- 3-5 primary keywords
- 2-3 technology keywords
- 1-2 personal/brand keywords

### Structure
```
<h1>[PROJECT_NAME] - Case Study</h1>
  <h2>Problem</h2>
  <h2>Solution</h2>
  <h2>Technology</h2>
  <h2>Results</h2>
```

### Content Tips
- Use short paragraphs (2-3 sentences max)
- Include numbers and metrics
- Add relevant images/screenshots
- Use bullet points for lists
- Include call-to-action (link back to portfolio or contact)

---

## Sitemap.xml Update

When adding a new project page, add this entry to `sitemap.xml`:

```xml
<url>
  <loc>https://marian-cv-premium.pages.dev/projects/[PROJECT_SLUG].html</loc>
  <lastmod>2026-02-08</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Quick Checklist for New Projects

- [ ] Create HTML file with template above
- [ ] Customize all [BRACKETED] sections
- [ ] Add proper H1 tag in body
- [ ] Add project description (200-300 words)
- [ ] Add images/screenshots with ALT text
- [ ] Link back to portfolio hub
- [ ] Update sitemap.xml
- [ ] Test with: https://search.google.com/test/rich-results
- [ ] Submit URL to Google Search Console

---

## Common Project Categories

| Category | Examples | Keywords |
|----------|----------|----------|
| Frontend | Mini Frontend JS, Site Portal, Mini CSS | JavaScript, CSS, React, Vue, HTML |
| Backend | Mini Backend Python/Java/Node, Logistics API | Python, Java, Node.js, REST API, Database |
| Mobile | Field Inspection, Mini Mobile | React Native, Flutter, iOS, Android |
| UX/UI | Design System CSS | Figma, Wireframes, Prototypes, Design System |
| AI/Integrations | AI Automations, Integration Hub, Workflow Hub | AI, Automation, Webhooks, System Integration |
| Operations | Fleet Management, Ops Dashboard | Dashboard, KPI, Real-time, Monitoring |

---

## Keywords by Category

### Frontend Keywords
- JavaScript / React / Vue / Angular
- Frontend development
- Web application
- User interface
- Responsive design

### Backend Keywords
- Python / Java / Node.js
- REST API
- Database design
- Server architecture
- Microservices

### Mobile Keywords
- Mobile development
- React Native / Flutter
- iOS / Android
- Field application
- Cross-platform

### UX/UI Keywords
- Figma design
- User experience
- Wireframes
- Prototypes
- Design system

### AI/Integration Keywords
- AI automation
- System integration
- Workflow automation
- API integration
- Data pipeline

### Operations Keywords
- Operations dashboard
- Real-time monitoring
- KPI tracking
- Fleet management
- Resource allocation

---

## Testing Your Metadata

After creating a new project page, test it:

1. **Google Rich Results Test**
   - Visit: https://search.google.com/test/rich-results
   - Paste URL or HTML
   - Check for errors

2. **Meta Tags Inspector**
   - Right-click → Inspect
   - Check `<head>` section
   - Verify all meta tags present

3. **Social Preview**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - Paste your page URL

---

## Questions?

Refer to:
- **SEO_GUIDE.md** - Detailed explanations
- **SEO_QUICKSTART.md** - Quick answers
- **ai-automation.html** - Complete example to copy from

Good luck with your portfolio! 🚀
