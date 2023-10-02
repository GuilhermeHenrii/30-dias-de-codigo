const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  curso: {type: String, required: false, default: ''},
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

const model = mongoose.model('Alunos', AlunoSchema);

module.exports = {Aluno, model};
