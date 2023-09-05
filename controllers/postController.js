const { Post, User, Comment } = require('../models');

const postController = {
  async index(req, res) {
    try {
      const posts = await Post.findAll({ include: [User] });
      res.render('home', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  async show(req, res) {
    const postId = req.params.postId;

    try {
      const post = await Post.findByPk(postId, {
        include: [User, Comment],
      });

      if (!post) {
        return res.status(404).send('Post not found');
      }

      res.render('post', { post });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  async create(req, res) {
    const { title, content } = req.body;
    const userId = req.session.userId;

    try {
      const post = await Post.create({ title, content, UserId: userId });

      if (!post) {
        return res.status(500).send('Failed to create a post');
      }

      res.redirect('/'); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = postController;
