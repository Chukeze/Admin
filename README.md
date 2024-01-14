This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# SpeedMart Admin page

# Overview
SpeedyMart is a web application built using Next.js 14, TypeScript, and Tailwind CSS. It's designed to provide a seamless and efficient user experience for various roles within a retail organization, including Admin, HR, Sales, Maintenance, and Engineering.
## Concept
This project is a role-based dashboard application built with Next.js 14 and TypeScript. It is designed to display different UI elements and data based on the user's role, enhancing both security and user experience. The application uses React Context for state management and Higher-Order Components (HOCs) for role-based access control.

# Current Focus Features
- User Authentication: Secure login functionality for different roles
- Dynamic Dashboard: Role-based access to various functionalities like Revenue, Sales, Productivity, and more.
- Responsive Design: Utilizing Tailwind CSS for a flexible and responsive layout.
- Error Handling: Robust error component to manage and display errors effectively.
- Centralized State Management: Using React Context for managing user authentication and roles.
- Next.js & TypeScript: Leveraging the power of Next.js for SSR and TypeScript for type safety.
- Optimized fonts

# Technical Stack
 - Frontend: Next.js 14, TypeScript, TailwindCSS, Scss, StyleX
 - State Management: ContextAPI for global state management
 - Styling: Tailwind css for main styling and responsive design; scss, sass, css-modules for component specific styling
 - Font: Google font and Google's Arima font for clean and modern UI

# Current Viewable Version


# Installation and Setup:

- Clone repo
```bash
git clone [https://github.com/Chukeze/Admin]
```
- Navigate to project directory and install dependencies
```bash
cd [Admin]

npm install
```
- Start dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Components
- Root Layout: Main layout component defining the basic structure.
- Dashboard: A dynamic component displaying different panels based on user role.
- LoginForm: Handles user authentication.
- ErrorComponent: Displays errors and provides a mechanism for recovery.
- FooterLinks: Component for displaying footer links.

# Contexts
- AuthContext: Manages authentication state across the application.

# Hooks
- useAuth: Custom hook for accessing authentication state.

# Utility Functions
- generateSpecifier: Generates a unique specifier for employee ID.
- validateInputs: Validates user inputs in forms.

# CSS Styling
- Utilizes Tailwind CSS for styling.
- Custom CSS for modal and input validation styling.

# API Routes
- Login Handler: Manages the login process and validation.

# Enums
- UserRole: Enumerates different user roles for access control.

# Error Handling
- ErrorComponent: Used to display and manage errors.

# Project Structure
The project is structured into several directories:

- `components`: Contains reusable UI components.
- `context`: Holds the context for state management.
- `hoc`: Higher-Order Components for role-based access.
- `pages`: Includes all the Next.js pages.
- `types`: TypeScript types and enums.
- `utils`: Utility functions for the application.

# Future Improvements/ Feature to be added
- Expand dashboard functionalities for different roles.
- Implement more robust state management using Redux.
- Create and then Integrate the backend for real-time data management and authentication.
- Improve accessibility and SEO.

# Running Tests
To run tests, execute the following command:

```bash
npm test
```

