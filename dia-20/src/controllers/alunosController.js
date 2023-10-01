const {Aluno, Model} = require('../models/AlunosModel');

// metodo para listar todos os alunos
exports.index = (req, res) => {

}

// registrar um novo aluno
exports.store = async (req, res) => {
  try {
    const newAluno = new Aluno(req.body);
    await newAluno.createAluno();
    res.send(newAluno);
  } catch(e){
    console.log(e);
    res.send('erro');
  }
}
