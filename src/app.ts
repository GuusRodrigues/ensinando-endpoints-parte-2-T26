import express, { json } from "express";
import { router as index } from "./routes";
import { planetasRouter } from "./routes/planetas";
import { postRouter } from "./routes/post";

const app = express();

app.use(json());
app.use("/", index);
app.use(postRouter);

export default app;
