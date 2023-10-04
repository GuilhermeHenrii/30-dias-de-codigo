const {Aluno, model} = require('../models/AlunosModel');

// metodo para listar todos os alunos
exports.index = (req, res) => {
  res.render('aluno-registrado');
}

// registrar um novo aluno
exports.store = async (req, res) => {
  try {
    console.log(req.body);
    const newAluno = new Aluno(req.body);
    await newAluno.createAluno();

    // temos que usar o save, para salvar a instancia newAluno da classe Aluno, dentro do this.aluno lá da classe Aluno do model.
    if(newAluno.errors.length > 0){
      console.log(req.flash);
      req.flash('errors', newAluno.errors);
      req.session.save(function(){
        return res.redirect('/alunos/register')
      })

      return;
    }

    req.flash('succsess', 'Aluno criado com sucesso');
    req.session.save(function(){
      return res.redirect('/alunos/register');
    })



  } catch(e){
    console.log(e);
    res.send('erro');
  }
}
