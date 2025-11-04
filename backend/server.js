import express from "express";
import agent from "./agent.js";

const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/treino", async (req, res) => {
  try {
    const treino = await agent();
    res.type("text/plain").send(treino);
  } catch (error) {
    console.error("Erro gerando treino:", error);
    res.status(500).send("Erro ao gerar treino");
  }
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
