const { name } = require('ejs');
const {Aluno, model} = require('../models/AlunosModel');

// metodo para listar todos os alunos
exports.show = (req, res) => {
  res.render('aluno-registrado');
}

// registrar um novo aluno
exports.store = async (req, res) => {
  try {
    const newAluno = new Aluno(req.body);
    await newAluno.createAluno();

    //console.log(newAluno.errors);

    // temos que usar o save, para salvar a instancia newAluno da classe Aluno, dentro do this.aluno lá da classe Aluno do model.
    if(newAluno.errors.length > 0){
      // entender o pq do objeto res.locals.errors está retornando um array vazio aq
      // console.log(res.locals.errors);
      req.flash('errors', newAluno.errors);
      req.session.save(function(){
        return res.redirect('/alunos/register')
      })

      return;
    }

    req.flash('success', 'Aluno criado com sucesso');
    req.session.save(function(){
      return res.redirect('/alunos/register');
    });

  } catch(e){
    console.log(e);
    res.send('erro');
  }
}

exports.index = async (req, res) => {
  let nameAlunos = [];
  const alunos = await Aluno.listAluno(req.body.curso);

  // terminar a logica para exibir todos os alunos por curso

  alunos.forEach((el) => {
    nameAlunos.push(el.nome);
  });

  res.render('lista-alunos', {nameAlunos}); // tentar renderizar a mesma page com o nome dos alunos cadastrados por curso
}
