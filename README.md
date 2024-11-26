# Employee Management System

This **React**-bases application allows users to manage employee details based on different roles. The system includes the ability to add new employees and manage their data, with role-based access control for Admin and Viewer roles.

## Features
- **Role-Based Access Control**:
 - Admins can add ,edit and delete employees.
 - Viewers can only view employee data.
 - **CRUD Operations**: Create, read, update, and delete employees.
- **Responsive Design**: Fully responsive UI using **Bootstrap** and **React**.
- **API Integration**: Interacts with a backend server hosted on Render.com.

## Components
 - Landing: The landing page where users select their role (Admin or Viewer).
 - Home: The main page that loads user-specific content based on the role selected.
 - Add: This component allows Admin users to add new employees. It includes:
 - Usermanagement: Displays the list of employees based on the current role.


## Routing
- The app uses React Router for page navigation:
- The Landing page where users choose their role.
- usermanagement – Displays the Home component with role-based content (Admin or Viewer).


## Tech Stack
**React**: JavaScript library for building user interfaces.
**React Router**: For navigation between pages.
**CSS**: Styling of components (Bootstrap or custom styles).
**Backend**: JSON Server (hosted on Render)
**Deployment**:
 - Frontend: Vercel
 - Backend: Render

  ## /API 
  - in this priject i used **Axios** Api. 
 
  ## /implemetd UI designs 
  - Modal
  - table  

## Installation and Setup  

- This will install the necessary packages listed in the package.json file (such as React, React Router, Axios)
- Node.js and npm installed 
- installed React-Bootstrap 
- React_router-dom

## Deployment

### Backend Deployment on Render
- deployed link : 

### Frontend Deployment on Vercel
- deployed link :