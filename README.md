# Next.js Project Setup and Basics

This repository contains a comprehensive Next.js project that demonstrates modern web development practices using TypeScript and Tailwind CSS. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs.

## Purpose

This project serves as a practical introduction to:

- Next.js with TypeScript integration
- Component-based architecture
- API integration and data fetching
- Responsive design with Tailwind CSS
- Best practices for project structure and code organization

## Project Structure

```
alx-project-0x02/
├── components/
│ ├── common/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── PostCard.tsx
│ │ ├── PostModal.tsx
│ │ └── UserCard.tsx
│ └── layout/
│ └── Header.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── \_app.tsx
│ ├── \_document.tsx
│ ├── about.tsx
│ ├── home.tsx
│ ├── index.tsx
│ ├── posts.tsx
│ └── users.tsx
├── public/
├── styles/
└── Configuration files
```

## Features Implemented

- ✅ Next.js project setup with TypeScript and Tailwind CSS
- ✅ Basic routing using Pages Router
- ✅ Reusable Card component with TypeScript interfaces
- ✅ Interactive Modal component with form handling
- ✅ Button component with multiple size and shape variations
- ✅ Complete navigation system with active state indicators
- ✅ PostCard component with API integration (JSONPlaceholder)
- ✅ UserCard component with contact information display
- ✅ Responsive design across all components
- ✅ Loading states and error handling
- ✅ Clean, organized code structure following best practices

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Navigate to the project directory: `cd alx-project-0x02`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev -- -p 3000`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **JSONPlaceholder** - REST API for testing and prototyping
