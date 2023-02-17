const { User, Post } = require("../model");

module.exports = {
  async createUser(req, res) {
    try {
      const { name } = req.body;
      const user = await User.create({ name });
      res.status(201).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  async getUsers(req, res) {
    try {
      const users = await User.findAll({ include: [{ model: Post }] });
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, { include: [{ model: Post }] });
      res.status(200).json({ user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updateUser = User.update({ name }, { where: { id } });
      res.status(200).json({ updateUser });
    } catch (error) {}
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
