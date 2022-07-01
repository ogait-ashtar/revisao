const express = require("express"); //importando o express
const cors = require("cors"); //iportando o cors

const port = 3000; //chama a porta

const app = express(); //ativo o express

app.use(cors()); //ativando o cors
app.use(express.json()); //ativando o json

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost: ${port}`);//ativando a porta e ver no terminal q esta rodando
});
