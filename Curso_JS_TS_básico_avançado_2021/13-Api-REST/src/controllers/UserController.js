import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      /**
       *  const novoUser = await User.create({
          nome: 'Andre',
          email: 'andre@email.com',
          password: '123456',
        });
       */
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(401).json(
        { erros: error.errors.map((e) => e.message) },
      );
    }
  }

  // Index
  async index(req, res) {
    try {
      // console.log('USER_ID: ', req.userId);
      // console.log('USER_EMAIL: ', req.userEmail);
      const users = await User.findAll({ attributes: ['id', 'email', 'nome'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      const { id, nome, email } = users;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      // if (!req.params.id) { return res.status(400).json({ errors: ['Id não enviado'] }); }
      const users = await User.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const novoDados = await users.update(req.body);
      const { id, nome, email } = novoDados;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(401).json(
        { erros: error.errors.map((e) => e.message) },
      );
    }
  }

  // Delete
  async delete(req, res) {
    try {
      // if (!req.params.id) {
      //   return res.status(400).json({ errors: ['Id não enviado'] });
      // }
      // const users = await User.findByPk(req.params.id);
      const users = await User.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }
      await users.destroy();
      return res.json('Usuário deletado com sucesso');
    } catch (error) {
      return res.status(401).json(
        { erros: error.errors.map((e) => e.message) },
      );
    }
  }
}

export default new UserController();
