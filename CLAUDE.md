# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PECH (The Plan to End Chronic Homelessness) is a civic tech website for Waterloo Region. This is primarily an informational website with dynamic data visualization features, designed to present strategies, resources, and timelines for ending chronic homelessness in the community.

The site features:
- Static informational content and community engagement features
- Dynamic data visualization pulled from Directus CMS
- Town hall meeting information and newsletter signup
- Co-creators collaboration section (in development)

## Tech Stack & Architecture

**Frontend:**
- Next.js 15 with App Router
- React 19
- TypeScript with strict mode enabled
- Tailwind CSS v4 for styling
- shadcn/ui components with Radix UI primitives

**Backend & Data:**
- Directus CMS as primary backend (hosted on DigitalOcean)
- GraphQL API via Directus SDK for data fetching
- Incremental Static Regeneration (ISR) for caching dynamic content

**Deployment:**
- Vercel auto-deployment (connects to main branch)
- Modern browsers only support

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production build locally
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues automatically
npm run check-types  # TypeScript type checking
```

**Important:** Always run `npm run lint` and `npm run check-types` after making changes.

## Code Style & Conventions

The project uses [@antfu/eslint-config](https://github.com/antfu/eslint-config) with custom overrides:

- **Indentation:** Tabs only (never spaces)
- **Quotes:** Double quotes for strings
- **Semicolons:** Required
- **Braces:** 1TBS style, no single-line blocks
- **Variables:** Prefer `const` over `let`, no `var`
- **Functions:** Max 5 parameters, prefer early returns

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header
│   ├── page.tsx           # Home page (Hero, Statistics, Goal, etc.)
│   └── co-creators/       # Co-creators collaboration section
├── components/
│   ├── index-page/        # Home page specific components
│   │   └── sections/      # Page sections (Hero, Statistics, etc.)
│   └── ui/                # shadcn/ui base components
└── lib/
    └── utils.ts           # Shared utilities (cn function, etc.)
```

## Component Organization Patterns

**Current Pattern Analysis:**
- Page-specific components in feature folders (`index-page/sections/`)
- Base UI components in `ui/` directory
- Reusable utilities in `lib/`

**Recommendations for New Features:**
- Follow the existing pattern: `components/[feature-name]/`
- Break down complex components into smaller, composable pieces
- Prefer composition over complex prop drilling
- Use Server Components by default, Client Components only when needed

**Note for AI Agents:** If you identify better organizational patterns or architectural improvements while working on the codebase, please prompt the user for confirmation before implementing changes.

## Important Development Patterns

### Server vs Client Components
- **Default:** Use Server Components for static content and data fetching
- **Client Components:** Only when you need interactivity, browser APIs, or state
- **Data Fetching:** Use Server Components to fetch from Directus via GraphQL

### Styling & UI
- Use shadcn/ui components for consistent design system
- All components must be responsive and work on all screen sizes
- Accessibility is critical - leverage Radix UI's built-in a11y features
- Custom styling with Tailwind CSS follows the existing design tokens

### State Management
- Prefer React's built-in `useState` for local state
- No global state management library currently used
- Only install additional state management if absolutely necessary

## Directus Integration

- **Purpose:** Primary CMS/backend for dynamic content
- **API:** GraphQL via `@directus/sdk`
- **Caching:** Use ISR for dynamic data that doesn't change frequently
- **Data Privacy:** All data stored in Directus is anonymized
- **Security:** Flag any potentially sensitive data for review when working with AI agents

## Design & Accessibility

- **Design System:** Figma designs available at: https://www.figma.com/design/AxgN5bAt7dcAQYc7EtIHZQ/PECH
- **Accessibility:** Required for all interactive elements (leverages Radix UI)
- **Responsive:** All features must work well on mobile, tablet, and desktop
- **Browser Support:** Modern browsers only

## Current Development Status

**Implemented:**
- Landing page with Hero, Statistics, Goal, DataSection, CommunitySpotlight sections
- Basic layout with Header component
- shadcn/ui component library setup
- ESLint configuration with strict rules

**In Progress:**
- Co-creators page (currently placeholder)

**Planned Features:**
- Data visualization components
- Dynamic content from Directus
- Additional informational sections per Figma designs

## AI Agent Guidelines

1. **Before Making Changes:**
   - Review existing component patterns in the codebase
   - Check Figma designs when implementing new UI features
   - Understand the Server vs Client Component patterns

2. **After Making Changes:**
   - Always run `npm run lint` and `npm run check-types`
   - Test responsive behavior on different screen sizes
   - Verify accessibility with interactive elements

3. **Architecture Decisions:**
   - If you identify improvements to the current organization patterns, prompt the user for confirmation
   - When creating new features, follow the existing folder structure unless a better pattern is identified
   - Consider data privacy when working with potentially sensitive information

4. **Development Best Practices:**
   - Prefer composition over inheritance
   - Keep components focused and single-purpose
   - Use TypeScript strictly - no `any` types
   - Follow the established ESLint rules

## Additional Notes

- No testing framework currently implemented
- No authentication required (informational website)
- No integration with external services beyond Directus
- English language only (no i18n planned)
- Auto-deployment to Vercel on commits to main branch