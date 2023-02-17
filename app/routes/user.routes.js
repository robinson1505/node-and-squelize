const express = require('express');
const router = express.Router();
const users = require('../controller/user.controller');
const posts =require("../controller/post.controller");

router.post('/', posts.createPost);
router.post('/user', users.createUser);

// Retrieve all Users
router.get('/', posts.getPosts);
router.get('/user',users.getUsers)

//Retrieve a single User with id
router.get('/:id', posts.getPostById);

// // Update a User with id
// router.put('/:id', users.update);

// // Delete a User with id
// router.delete('/:id', users.delete);

module.exports = router;