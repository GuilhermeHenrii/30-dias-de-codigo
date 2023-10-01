const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: {type: String, require: false, default: ''},
  curso: {type: String, require: false, default: ''},
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
    this.aluno = await AlunosModel.create(this.body);
  }
}

module.exports = {AlunosModel, Aluno};
