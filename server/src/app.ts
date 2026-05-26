import express from "express";
import cors from "cors";

import urlRoutes from "./routes/urlRoutes";

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://nano-link-lime.vercel.app"],
  credentials: true
}));
app.use(express.json());

app.use("/", urlRoutes);

export default app;