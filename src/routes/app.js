import express from "express";
import taskRouter from "./tasks.js";

const app = express();

app.use(express.json());
app.use("/api/task", taskRouter);

export default app;
