import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import CategoriaRouter from "./routes/categorias.routes.js";

const app = express();

dotenv.config();

app.use("/categoria", CategoriaRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
  console.log(`Super servidor corriendo en el puerto ${PORT}`);
});
