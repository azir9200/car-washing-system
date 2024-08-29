import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import cookieParser from "cookie-parser";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// app.use(express.json());
// app.use(cors());

 app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hey welcome all you  World!");
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
