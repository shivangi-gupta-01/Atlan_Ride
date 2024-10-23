# Atlan Goods Application

## Overview

Atlan Goods Application backend is built to handle complex logistics operations like booking management, driver assignments, and real-time tracking. It is designed for scalability and handling several requests. The backend includes role-based access for customers, drivers, and admins.

### Demo Videos

[Customer Demo](https://drive.google.com/file/d/1LNJV5VBORtPSvXqigelehDNurmG0Jwmx/view?usp=sharing)

[Driver Demo](https://drive.google.com/file/d/1v8iLAloYFUiEs_LLdKvGuQR40sNttP2T/view?usp=sharing)

---

## Features

### 1. Customers

- **Manage Bookings**: Create, update, and cancel bookings.
- **Real-time Notifications**: Get updates on driver assignments and movements.
- **Ride Ratings and Reviews**: A system for users to rate and review their ride-sharing experience, promoting accountability and trust within the community.

### 2. Drivers

- **Receive Booking Requests**: Accept or reject bookings based on availability.
- **Track Bookings**: View and manage active bookings and past history.

### 3. Admins

- **Analytics**: Monitor driver performance and platform activity.
- **Driver & Vehicle Management**: View, update, and manage driver and vehicle data.
- **Booking Management**: Full control over booking creation, modification, and deletion.
- **Email**: Email is sent to the driver upon ride booking with customer details.

---

## Tech Stack

#  Frontend

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [Context Api](https://react.dev/reference/react/useContext) - For state management
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [Axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Shadcn](https://ui.shadcn.com) - For Design components
- [Tailwind Css](https://tailwindcss.com/) - For styling
- [Lucide icons](https://lucide.dev/icons/) - For adding icons to the react apps.

#  Backend

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for uploading files
- [Cloudinary](https://cloudinary.com) - For uploading images


####  Database

 - [MongoDB ](https://www.mongodb.com/) - Free cloud service to store MongoDB collections. -->

---

## Documentation

[Please find documentation about the project here](https://drive.google.com/file/d/1GM4MLy3IFLEc0v61Pi92kl1rxQlHBags/view?usp=sharing)

## Diagrams

### ER Diagram

<p align="center">
  <img src="/diagrams/er.jpg" alt="ER Diagram" />
</p>

### Flow Diagram

<p align="center">
  <img src="/diagrams/flow.jpg" alt="Flow Diagram" />
</p>

### HL Diagram

<p align="center">
  <img src="/diagrams/Hl.jpg" alt="HL Diagram" />
</p>

---
