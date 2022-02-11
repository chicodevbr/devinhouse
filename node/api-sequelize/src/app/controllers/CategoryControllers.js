import Category from '../model/Category';

class CategoryControllers {
  async index(req, res) {
    const category = await Category.findAll();
    return res.json(category);
  }

  async store(req, res) {
    const data = req.body;
    const user = await Category.create(data);

    return res.json(user);
  }

  async show(req, res) {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    return res.json(category);
  }
}

export default new CategoryControllers();
