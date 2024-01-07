This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Overview
This project is a role-based dashboard application built with Next.js 14 and TypeScript. It is designed to display different UI elements and data based on the user's role, enhancing both security and user experience. The application uses React Context for state management and Higher-Order Components (HOCs) for role-based access control.

# Current Features
- Dynamic Dashboard: Updates content based on user interactions and roles.
- Role-Based Access Control: Customizable UI elements visible based on user permissions.
- Centralized State Management: Using React Context for managing user authentication and roles.
- Next.js & TypeScript: Leveraging the power of Next.js for SSR and TypeScript for type safety.
- Optimized fonts

## Current Viewable Version

First, run the development server:

```bash
git clone [https://github.com/Chukeze/Admin]

cd [Admin]

npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Current Project Structure
- /pages - Next.js pages including the main dashboard.
- /components - Reusable components including sidebar items.
- /context - React Context for global state management.
- /hoc - Higher-Order Components for role-based access.

