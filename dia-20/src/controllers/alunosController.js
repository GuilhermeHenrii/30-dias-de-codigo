const {Aluno, model} = require('../models/AlunosModel');

// metodo para listar todos os alunos
exports.index = (req, res) => {

}

// registrar um novo aluno
exports.store = async (req, res) => {
  try {
    const newAluno = new Aluno(req.body);
    await newAluno.createAluno();

    // temos que usar o save, para salvar a instancia newAluno da classe Aluno, dentro do this.aluno lá da classe Aluno do model.
    await newAluno.aluno.save();
    return res.send('ok');

  } catch(e){
    console.log(e);
    res.send('erro');
  }
}
