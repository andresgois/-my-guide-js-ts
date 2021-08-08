import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Andre',
      sobrenome: 'Gois',
      email: 'andre@email.com',
      idade: 32,
      peso: 72.8,
      altura: 1.78,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
