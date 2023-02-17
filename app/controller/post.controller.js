const { User, Post } = require("../model");

module.exports = {
  async createPost(req, res) {
    try {
      const { title, content, userPosts} = req.body;

      const post = await Post.create({ title, content,userPosts });
      res.status(201).json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  async getPosts(req, res) {
    try {
      const posts = await Post.findAll();
      res.status(200).json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id, { include: [{ model: User }] });
      res.status(200).json({ post });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  // async updateUser (req,res) {
  //   const {id} =req.params;
  // }
};
