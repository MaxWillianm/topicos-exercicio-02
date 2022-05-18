const express = require("express");
const app = express();
const { Aluno } = require("./models");
const port = 3606;
app.use(express.json());




app.get("/", function(req, res){
    res.send("Pagina sobre Alunos");
  });

  app.get("/acesso", function(req, res){
    res.send("Acesse http://localhost:3606/cadastrar para cadastrar");
  });

app.get("/cadastrar", function(req, res){
    res.send(novoAluno);
  });

   const novoAluno = Aluno.create({
      name: 'Marcelo',
      email: 'marcelo@gmail.com'
  });

app.get()
console.log(novoAluno)

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}/`);
});
