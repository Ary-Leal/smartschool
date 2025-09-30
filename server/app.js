/* Configurações do Express */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
require("dotenv").config();
const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
// Rotas
app.use("/api/students", studentRoutes);
// Conexão com MongoDB
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado ao MongoDB"))
.catch((err) => console.error("Erro ao conectar ao MongoDB:", err));
module.exports = app;