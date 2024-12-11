# SportsSphere Backend

This is the backend server for the SportsSphere project, a sports equipment e-commerce platform. It provides APIs for user authentication, equipment management, and other server-side functionalities. The backend is built using Express.js and MongoDB, and it integrates with Firebase Authentication for secure user management.

## Features

- **Authentication**:
  - Supports user registration and login with Firebase Authentication.
  - Validates Firebase ID tokens for secure API access.
- **Equipment Management**:
  - CRUD operations for sports equipment.
  - Equipment data includes fields such as name, category, price, and customization options.
- **Secure Routes**:
  - Private routes protected by middleware to verify user authentication.
- **Sorting and Filtering**:
  - Sort equipment by price (ascending/descending).
  - Fetch equipment data in paginated format.

## Technology Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB (Mongoose for ORM)
- **Authentication**: Firebase Authentication
- **Middleware**: CORS, dotenv, body-parser
- **Deployment**: Vercel

## API Endpoints

### Authentication

- **POST `/api/auth`**
  - Stores authenticated user details in the database.
  - Requires a valid Firebase ID token in the `Authorization` header.
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "photoURL": "https://example.com/photo.jpg"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "User authenticated and stored",
      "user": { ... }
    }
    ```

### Equipment Management

- **POST `/api/equipment`**
  - Adds new equipment.
  - **Request Body**:
    ```json
    {
      "image": "https://example.com/image.jpg",
      "itemName": "Soccer Ball",
      "categoryName": "Football",
      "description": "High-quality soccer ball",
      "price": 50.99,
      "rating": 4.5,
      "customization": ["Logo", "Color"],
      "processingTime": "2-3 days",
      "stockStatus": 20,
      "userEmail": "john@example.com",
      "userName": "John Doe"
    }
    ```
- **GET `/api/equipment/:id`**
  - Fetches one equipment by that ID.
- **PUT `/api/equipment/:id`**
  - Updates an existing equipment by ID.
- **DELETE `/api/equipment/:id`**
  - Deletes an equipment by ID.
- **GET** `/api/equipments?sort=1&email=user@mail.com`
  - Both query params are optional
  - Fetches all the equipments
  - sort values are 1 and -1 for ascending and descending sorting respectively.

## Environment Variables

Store sensitive information in a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/sports-sphere
ORIGIN=https://front-end.url
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/devkowsir/sports-sphere-server
   cd sports-sphere-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your environment variables.
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This backend is deployed using **Vercel**:

- Ensure all environment variables are set in the Vercel dashboard.
- Use `vercel deploy` to deploy the project.

## Contact

For any questions or issues, please reach out at [devkowsir@gmail.com](mailto:devkowsir@gmail.com).
