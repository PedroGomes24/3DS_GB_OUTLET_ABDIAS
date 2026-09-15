const express = require("express");

// CORREÇÃO: Inicialize o app chamando a função express()
const app = express(); 

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});