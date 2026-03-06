import express from "express";
import { router }from "./src/router/router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/user', router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});