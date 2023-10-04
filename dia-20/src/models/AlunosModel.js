const mongoose = require('mongoose');
const validator = require('validator');

const AlunoSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  curso: {type: String, required: true},
  criadoEm: {type: Date, default: Date.now},
});

const AlunosModel = mongoose.model('Alunos', AlunoSchema);

class Aluno{
  constructor(body){
    this.body = body;
    this.errors = [];
    this.aluno = null;
    this.valid = true;
  }

  async createAluno() {
    this.validate();

    if(this.errors.length > 0) return;

    try{
      this.user = await AlunosModel.create(this.body);
  }catch(e){
      console.log(e);
  }
  }

  validate(){
    this.cleanUp();

    if(this.body.nome.length < 2 || this.body.nome.length > 50){
      this.errors.push('Nome deve ter entre 3 e 50 caracteres');
    }
    if(!this.body.curso){
      this.errors.push('Adicione um curso');
    }
  }

  cleanUp(){
    for(let key in this.body){
      if(this.body[key] != 'string'){
        this.body[key] = '';
      }
    }

    this.body = {
      nome: this.body.nome,
      curso: this.body.curso,
    }
  }
}

const model = mongoose.model('Alunos', AlunoSchema);

module.exports = {Aluno, model};
