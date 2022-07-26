import express, { Application, Request, Response, NextFunction } from "express";

import { router as userRoutes } from "./routes/user.routes";

import path from "path";

const app: Application = express();

// app.use("/users", userRoutes);
app.use(express.static(path.join(process.cwd(), '..', 'client', 'build')));

app.use("/api", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Hello!" });
});

export default app;
