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
}

export default new CategoryControllers();
