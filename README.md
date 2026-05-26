# NanoLink 🔗

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://nano-link-lime.vercel.app/)

NanoLink is a fast, minimal, and efficient URL shortener stack built with modern web technologies. It provides a seamless way to convert long URLs into clean, manageable, and trackable short links.

## 🚀 Tech Stack

### Frontend (Client)
- **React 19** - UI Library
- **Vite** - Next Generation Frontend Tooling
- **TypeScript** - Static Typing
- **Axios** - Promise-based HTTP client

### Backend (Server)
- **Node.js** - Runtime Environment
- **Express 5** - Web Framework
- **Mongoose** - MongoDB Object Modeling
- **NanoID** - Tiny, secure URL-friendly unique string ID generator
- **TypeScript** - Static Typing

---

## 📁 Project Structure

A clean, modular architecture separating the frontend client from the backend API.

```text
NanoLink/
├── client/                 # React + Vite Frontend
│   ├── src/
│   │   ├── assets/         # Static images, SVGs, etc.
│   │   ├── pages/          # React route components
│   │   ├── services/       # API integration logic
│   │   ├── App.tsx         # Main application component
│   │   └── main.tsx        # React entry point
│   └── package.json
└── server/                 # Node.js + Express Backend
    ├── src/
    │   ├── controllers/    # Route handlers
    │   ├── interfaces/     # TypeScript types & models
    │   ├── routes/         # Express API routes
    │   ├── services/       # Business logic layer
    │   ├── utils/          # Helper functions
    │   ├── app.ts          # Express configuration
    │   └── server.ts       # Backend entry point
    ├── .env                # Environment variables (Create this)
    └── package.json
```

---

## 🛠️ Setup Flow & Installation

Follow these steps to get the full stack running on your local machine.

### Prerequisites
- **[Node.js](https://nodejs.org/)** (v18 or higher recommended)
- **[MongoDB](https://www.mongodb.com/)** (Local instance or MongoDB Atlas URL)

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/NanoLink.git
cd NanoLink
```

### Step 2: Configure the Backend (Server)
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install the required backend dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables. Create a `.env` file in the `server` folder:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The server should now be running on `http://localhost:5000`.*

### Step 3: Configure the Frontend (Client)
1. Open a **new terminal window/tab** and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install the required frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The app should now be running on your local port, typically `http://localhost:5173`.*

> **💡 Tip:** Ensure the backend is running simultaneously with the frontend so API calls resolve correctly!

---

## 📜 Scripts

### Client (`/client`)
- `npm run dev` - Starts the Vite development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check for code issues
- `npm run preview` - Previews the production build locally

### Server (`/server`)
- `npm run dev` - Starts the server in development mode using `ts-node-dev`
- `npm run build` - Compiles TypeScript to JavaScript
- `npm run start` - Starts the compiled production server

---

## 🤝 Contributing

Contributions are always welcome! Feel free to open an issue or submit a pull request if you have ideas for improvements or find any bugs.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the ISC License.
