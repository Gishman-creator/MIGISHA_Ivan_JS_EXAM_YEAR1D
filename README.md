# Javascrip Practical Exam

## Overview

This project is a comprehensive web application that facilitates the management and visualization of data through CRUD (Create, Read, Update, Delete) operations. The application is built with a modern stack, featuring a backend server using Express.js and MongoDB, and a frontend built with React and Tailwind CSS.

## Project Structure

The project is divided into two main folders:

1. **Backend Folder**
   - Contains the server-side code.
   - Built with Express.js.
   - Interacts with a MongoDB database.
   - Manages API routes for handling CRUD operations.
   - Includes necessary packages such as `express`, `mongoose`, `body-parser`, etc.

2. **Frontend Folder**
   - Contains the client-side code.
   - Built with React.
   - Styled with Tailwind CSS.
   - Manages routes using React Router.
   - Uses React state and hooks for interactivity.
   - Implements data tables that allow users to view and manage data entries.

## Features

### CRUD Operations
- **Create**: Add new data entries through forms.
- **Read**: Display data entries in a data table.
- **Update**: Edit existing data entries.
- **Delete**: Remove data entries.

### Data Table
- Displays data entries in a structured format.
- Includes a "View More" button for each entry.
- Clicking "View More" displays additional details **at the bottom of the data table**.
- Pagination and search functionality to easily navigate through data entries.

### Interactivity
- Form validation to ensure data integrity.
- Dynamic state management to update the UI based on user interactions.
- Responsive design using Tailwind CSS to provide a consistent experience across different devices.

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/project-name.git
   cd project-name
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Project

1. **Start the backend server:**
   ```bash
   cd backend
   node start
   ```
   for nodemon
   ```bash
   cd backend
   nodemon express.js
   ```

   The backend server will start on `http://localhost:8000`.

2. **Start the frontend server:**
   ```bash
   cd ../frontend
   npm run dev
   ```

   The frontend server will start on `http://localhost:viteServer`.

2. **Start tailwind:**
   ```bash
   npx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css --watch
   ```

### Usage

- Navigate to `http://localhost:viteServer` in your web browser.
- Use the provided forms to add new data entries.
- View data entries in the data table.
- Click on "View More" to see additional details `on the bottom of the table.`
- Edit or delete entries as needed.

## Dependencies

### Backend
- express
- mongoose
- body-parser
- cors
- nodemon

### Frontend
- react
- react-dom
- react-router-dom
- tailwindcss


