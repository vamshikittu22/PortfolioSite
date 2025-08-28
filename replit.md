# Overview

This is a personal portfolio website built as a full-stack application showcasing Vamshi Krishna Pullaiahgari's professional profile. The project is designed as a modern, responsive one-page portfolio following Swiss design principles with a radiant color palette (teal, coral, soft yellow, muted purple). The site features comprehensive sections including hero, about, skills, experience, projects, blog integration, social media presence, education, and contact information. The application follows a monorepo structure with separate client and server directories, shared schema definitions, and modern web development practices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript running on Vite for fast development and optimized builds
- **UI Library**: Radix UI components with shadcn/ui design system for consistent, accessible interface elements
- **Styling**: Tailwind CSS with custom color palette and Swiss-style design principles
- **Font**: Montserrat as primary typography choice for clean, readable text
- **State Management**: TanStack Query for server state and caching, with local state using React hooks
- **Routing**: Wouter for lightweight client-side routing
- **Animation**: Custom scroll-based animations using Intersection Observer API for smooth reveal effects

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for type safety and modern JavaScript features
- **Development**: Hot module replacement via Vite integration for seamless development experience
- **Storage Interface**: Abstract storage layer with in-memory implementation, designed to be easily swappable with database backends
- **API Design**: RESTful endpoints with /api prefix, structured error handling, and request logging middleware

## Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Shared TypeScript schema definitions between client and server using Zod for validation
- **Migration**: Drizzle Kit for database migration management
- **Connection**: Neon Database serverless PostgreSQL configured as primary database option
- **Development Storage**: In-memory storage implementation for rapid prototyping and testing

## Authentication and Authorization
- **Session Management**: Express session handling with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user model with username/password authentication structure
- **Validation**: Zod schema validation for user input and data integrity
- **Security**: Prepared for credential-based authentication with session persistence

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for managed PostgreSQL hosting
- **Deployment**: Configured for production deployment with build optimization
- **Development Tools**: Replit integration with development banner and cartographer plugin
- **Asset Management**: Static file serving with Vite-optimized asset pipeline
- **Error Handling**: Runtime error overlay for development debugging
- **Fonts**: Google Fonts integration for Montserrat and supporting typefaces