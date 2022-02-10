import Posts from '../model/Posts';

class PostsControllers {
  async index(req, res) {
    try {
      const { id } = req.params;

      const posts = await Posts.findAll({
        where: {
          user_id: id,
        },
      });
      return res.json(posts);
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        message: 'Error no servidor.',
      });
    }
  }

  async store(req, res) {
    try {
      const data = req.body;
      const posts = await Posts.create(data);

      return res.json(posts);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Error ao cadastrar.' });
    }
  }
}

export default new PostsControllers();
