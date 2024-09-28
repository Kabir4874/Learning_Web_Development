import express from "express";
import { connection } from "./postgres/postgres.js";
import router from "./routes/routes.js";
import cors from "cors";
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

connection();
