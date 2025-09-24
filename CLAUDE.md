# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using TypeScript, React 19, and Tailwind CSS v4. The project is set up with shadcn/ui components and includes Turbopack for fast development builds.

## Project Goals
Building a portfolio website with:
- Recruitment-focused case studies (/work section)  
- Digital garden for exploration (/garden section)
- Cream paper (#faf9f6) + faded blue (#3771cd) design system
- Framer Motion for polished interactions
- Markdown-based content management

## todo.md

Inside of the `tasks` directory, there is a `todo.md` file that contains a list of tasks that need to be completed. Please read the file and follow the instructions.

As you work through the tasks, please update the file to reflect the progress. Please update the file with the progress of the tasks, providing a brief description of what you've done while also checking the tasks as done.

After each section of tasks, please create a new commit with a relevant message. That way we can go back if needed.

- Open and read `tasks/todo.md` for the list of tasks.  
- Complete each task, then update this file with:  
  - [x] Mark task as done  
  - Add a short note on what you did  
- After finishing a section of tasks, commit your changes with a clear message.  

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for fast builds)
- **Production build**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`
- **Linting**: `npm run lint`

## Architecture

The project follows Next.js App Router structure:

- **App Directory**: `src/app/` - Contains pages and layouts using App Router
- **Components**: Use shadcn/ui with alias `@/components` (configured in components.json)
- **Utilities**: `src/lib/utils.ts` - Contains utility functions including the `cn()` helper for class merging
- **Styling**: Tailwind CSS v4 with custom CSS in `src/app/globals.css`

## Key Configuration

- **TypeScript**: Configured with strict mode and path aliases (`@/*` maps to `src/*`)
- **shadcn/ui**: Configured with "new-york" style, stone base color, and CSS variables
- **Fonts**: Uses Geist Sans and Geist Mono from Google Fonts
- **Icons**: Lucide React for iconography

## Component Architecture

The project uses shadcn/ui component system with:
- Components stored in `@/components/ui`
- Utilities in `@/lib/utils`
- Class name merging via `cn()` utility (clsx + tailwind-merge)

## Dependencies

Key libraries in use:
- Next.js 15 with App Router
- React 19
- Tailwind CSS v4
- shadcn/ui component library
- Lucide React for icons
- class-variance-authority for component variants

## User Preferences
- I am a product designer with little experience with coding - NOT a developer  
- I need much more detailed explanations than you would give to a senior developer  
- Always make smaller, incremental changes rather than large modifications  
- I want to learn while coding, so break everything down into simple steps  
- For larger or riskier changes, provide specific warnings and signals like "⚠️ LARGE CHANGE ALERT" or "🔴 HIGH RISK MODIFICATION"  
- Always remind me to verify larger changes before they're implemented  

## Be in Learning Mode
- When writing code or concepts, provide educational context and explanations. Break down complex topics into digestible parts, explain your reasoning process, and aim to help me understand not just what to do but why it works that way. Feel free to be more verbose in your explanations when teaching new concepts.  
- When making code changes, explain each step of the way and break each code change down to its individual changes. Add additional comments for what you're doing and why that I can edit or remove as I see fit.  
- Add warnings for auto-accepting code changes, especially ones that are larger or more complex so that I can review and learn from them.  
- Use clear visual signals like emojis (⚠️ 🔴 🛑) when making larger or riskier changes  
- Always pause and wait for my confirmation before implementing significant modifications  