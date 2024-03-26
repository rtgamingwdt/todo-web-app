import express from "express";
import { PORT } from "./config";
const app = express();

app.listen(PORT, () => console.info(`Todo-Web-App Listening on Port: ${PORT}`));
