# MasarVisa - Application Structure & Development Plan

This document outlines the architecture, tech stack, routing structure, and future development plan for the MasarVisa web application.

## 🏗️ Technical Stack (The Architecture)

* **Framework:** Next.js 14 (App Router) for optimal SEO, Server-Side Rendering (SSR), and Static Site Generation (SSG).
* **Language:** TypeScript for type safety and robust code.
* **Styling:** Tailwind CSS (v4) to implement the custom "Stitch" Design System (vibrant teal primary color, rounded components, glassmorphism, RTL support).
* **Database:** PostgreSQL accessed via Prisma ORM for type-safe database queries.
* **Typography:** Google Fonts (`Public Sans` for Latin text, `Cairo` for Arabic text).
* **Icons:** Material Symbols Outlined.

---

## 📂 Application Structure (Routing)

The application utilizes Next.js App Router. All public-facing pages are organized within the `app/(public)` route group, sharing the global Navbar, Footer, and Latest News sections.

### 1. Core Pages
* **`/` (Homepage):** 
  * Features an auto-playing hero slider (Main CTA, Hotels, Latest News).
  * AI Analyzer Chatbot UI.
  * Core direct services grid.
* **`/about` (About Us):** Details the company's mission, vision, values, and legal standing.
* **`/contact` (Contact Us):** Features contact forms, office location maps, and direct contact numbers/emails.

### 2. Services Hub
* **`/services` (Main Services Page):** Lists all direct services (Document Review, Visa Forms, Consultations) and Affiliate Services (Hotels, Flights, Insurance).
* **`/services/document-review`:** Dedicated page for specialized document verification services.
* **`/services/visa-form`:** Dedicated page for professional visa form filling assistance.
* **`/services/flight-booking`:** Dedicated page for flight reservations (dummy tickets for visas and confirmed tickets).
* **`/services/hotels`:** Dedicated page for hotel booking services.
* **`/services/insurance`:** Dedicated page for international travel and medical insurance plans.

### 3. Blog & News (SEO Engine)
* **`/news`:** A grid of all published immigration and visa news articles, fetched dynamically from the database.
* **`/news/[slug]`:** Dynamic routing for reading individual articles. Includes rich text rendering, high-quality images, and metadata for SEO.

---

## 🧩 Key Reusable Components
Located in the `components/` directory, these ensure UI consistency across the application:

* **`layout/Navbar.tsx` & `Footer.tsx`:** The global navigation shell containing the brand identity and payment method trust signals.
* **`home/Hero.tsx`:** The dynamic 3-slide slider component that automatically fetches the latest layout.
* **`news/LatestNewsSection.tsx`:** A global component injected into `app/layout.tsx` so that the latest immigration news appears on *every single page* just above the footer.
* **`news/ArticleCard.tsx` & `services/ServiceCard.tsx`:** Reusable UI card components enforcing standard border-radius, shadows, and interactive hover states.
* **`ai/ChatbotUI.tsx`:** The frontend visual interface for the "AI Analyser" tool.

---

## 🗄️ Database Schema 
The PostgreSQL database (via `prisma/schema.prisma`) holds the following core structures:

1. **`Article` Model:** Powers the `/news` routing. 
   * Fields: `id`, `title`, `slug`, `content`, `metaDescription`, `imageUrl`, `publishedAt`.
2. **`ServiceRequest` Model:** Handles incoming customer orders and leads. 
   * Fields: `customerName`, `phone`, `serviceType`, and preferred `paymentMethod` (e.g., CashPlus, Western Union, Ria).

---

## 🚀 The Development Plan & Next Steps

With the structural scaffolding, design system integration (Stitch templates), and creation of all specialized pages complete, the next phases of development are:

### Phase 1: Backend Integrations (Forms & API)
* Wiring up the forms on `/contact` and the specific service landing pages.
* Saving `ServiceRequests` into the PostgreSQL database.
* Setting up automated email notifications (or webhooks to WhatsApp/n8n) when a new request is submitted.

### Phase 2: AI Implementation (Ollama/ChatGPT)
* Connecting the visual `ChatbotUI` component to the backend `/api/chat` route.
* Instructing the AI model with legal/visa constraints to provide real, automated visa analysis responses safely.

### Phase 3: Content Management System (Admin Dash)
* Building a secure `/admin` dashboard route.
* Allowing admin users to easily write, edit, and publish new news articles to the DB without touching code.
* Creating a view to manage and process incoming `ServiceRequests`.
