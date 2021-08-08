import Aluno from '../models/Aluno';
import Foto from '../models/Fotos';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'id', 'filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      const { nome, sobrenome, idade } = aluno;
      return res.json({ nome, sobrenome, idade });
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['id', 'url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      // const { nome, sobrenome, idade } = aluno;
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json('Aluno deletado com sucesso');
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      const { nome, sobrenome, idade } = alunoAtualizado;

      return res.json({ nome, sobrenome, idade });
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new AlunoController();
