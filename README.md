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

```text
NanoLink/
├── client/          # React + Vite frontend application
└── server/          # Node.js + Express backend API
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas URL)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/NanoLink.git
cd NanoLink
```

### 2. Setup the Server (Backend)
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and configure your environment variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```
Start the development server:
```bash
npm run dev
```

### 3. Setup the Client (Frontend)
Open a new terminal window/tab:
```bash
cd client
npm install
```
Start the Vite development server:
```bash
npm run dev
```

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
