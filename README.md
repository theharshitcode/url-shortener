# Shortened URL

This is a full-stack URL shortener application that allows users to shorten long URLs into a more manageable and shareable format. The application consists of a React frontend and a Node.js (Express) backend.

## Features

-   **Shorten URLs:** Convert long URLs into short, unique links.
-   **Redirection:** The shortened URLs redirect to the original long URL.
-   **Simple UI:** A clean and simple user interface to interact with the service.

## Tech Stack

**Frontend:**

-   React
-   Vite
-   Axios

**Backend:**

-   Node.js
-   Express.js
-   MongoDB (with Mongoose)
-   NanoID for unique ID generation

## Cloning the Repository

```sh
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

## Setup and Running the Application

### Prerequisites

-   Node.js and npm installed
-   MongoDB installed and running

### Backend Setup

1.  Navigate to the `Backend-shortened-url` directory:
    ```sh
    cd Backend-shortened-url
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```
3.  Start the backend server:
    ```sh
    npm start
    ```
    The server will be running on `http://localhost:8000` (or the configured port).

### Frontend Setup

1.  Navigate to the `Frontend` directory:
    ```sh
    cd Frontend
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```
3.  Start the frontend development server:
    ```sh
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Folder Structure

```
.
├── Backend-shortened-url/
│   ├── controller/
│   ├── lib/
│   ├── Model/
│   ├── routes/
│   ├── index.js
│   └── package.json
└── Frontend/
    ├── public/
    ├── src/
    ├── index.html
    └── package.json
```
