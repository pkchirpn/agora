import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 5005;
const morgan = require("morgan");
app.use(morgan("dev"));

import { router } from "./routes/agora-access.route";
app.use("/api", router);

app.all("/", (req: Request, res: Response) => {
  res.json("Welcome to agora token generator");
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: `Page '${req.path}' not available`,

  });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
