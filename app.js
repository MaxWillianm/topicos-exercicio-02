const express = require("express");
const app = express();
const { Aluno } = require("./models");
const port = 3606;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  

  const novoAluno = Aluno.create({
      name: 'Mateus',
      email: 'mateus@gmail.com'
  })
console.log(novoAluno)

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}/`);
});
