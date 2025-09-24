# Portfolio Website Development Plan

## Project Overview
Building a personal portfolio website for showcasing product design work and creating a digital garden. Focus on learning React/Next.js concepts through hands-on development.

## Design Goals
- **Aesthetic**: Hand-crafted, thoughtful, premium design portfolio feel
- **Colors**: Cream paper background (#faf9f6) + faded blue accents (#5c7cfa)
- **Approach**: Mobile-first design for easy networking sharing
- **Interactions**: Smooth card expansion animations and micro-interactions

## Routing Structure
- `/` - Homepage with hero and navigation
- `/work` - Case studies overview page
- `/work/[slug]` - Individual case study pages (starting with "Magic Ads")
- `/garden` - Digital garden/blog overview
- `/garden/[slug]` - Individual garden post pages

## Development Phases

### Phase 1: Foundation & Routing [FOUNDATION]
**Learning Focus**: Next.js App Router, file-based routing, layouts

**Tasks:**
- [ ] Set up basic page structure with App Router
- [ ] Create layout.tsx for consistent navigation across pages
- [ ] Build placeholder pages for all routes
- [ ] Test routing navigation between pages

### Phase 2: Design System & Core Components [DESIGN]
**Learning Focus**: Component architecture, Tailwind CSS, design tokens

**Tasks:**
- [ ] Set up design tokens and color system in globals.css
- [ ] Create reusable Typography components
- [ ] Build Navigation component with mobile responsive design
- [ ] Create Hero component for homepage
- [ ] Design and build CaseStudyCard component
- [ ] Set up component folder structure following shadcn/ui patterns

### Phase 3: Animation & Interactions [ANIMATION]
**Learning Focus**: Framer Motion, React animations, micro-interactions

**Tasks:**
- [ ] Install and configure Framer Motion
- [ ] Add page transition animations between routes
- [ ] Create smooth card hover and expansion animations
- [ ] Add micro-interactions for navigation elements
- [ ] Implement loading states and transitions

### Phase 4: Content Management [CONTENT]
**Learning Focus**: Markdown processing, dynamic routes, data fetching

**Tasks:**
- [ ] Set up markdown processing (next-mdx-remote or similar)
- [ ] Create data structure for case studies and garden posts
- [ ] Build dynamic pages for [slug] routes
- [ ] Add "Magic Ads" case study content
- [ ] Create garden post template and sample content
- [ ] Add metadata and SEO optimization

### Phase 5: Polish & Optimization [POLISH]
**Learning Focus**: Performance, accessibility, deployment

**Tasks:**
- [ ] Optimize images and loading performance
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Test responsive design across devices
- [ ] Add error handling and 404 pages
- [ ] Prepare for deployment

## Risk Assessment & Learning Notes

[LOW RISK] Basic routing, static components, CSS styling
[MEDIUM RISK] Framer Motion integration, markdown processing
[HIGH RISK] Complex animations, dynamic content loading

**Key Learning Concepts:**
- File-based routing in Next.js 15
- Component composition patterns
- CSS-in-JS vs Tailwind approaches
- State management for animations
- Markdown-to-React conversion
- Mobile-first responsive design

## Next Steps
1. **Review this plan together** - discuss any adjustments needed
2. **Start with Phase 1** - basic routing and page structure
3. **Iterate and learn** - pause between phases to understand concepts

---
*This plan prioritizes learning while building - each phase introduces new React/Next.js concepts gradually!*