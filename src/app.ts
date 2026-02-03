import express from "express";
import cors from "cors";
import helmet from "helmet";
import resourceRoutes from "./routes/resource.routes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/resources", resourceRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to BorrowBoard API");
});

export default app;
