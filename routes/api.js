var express = require('express');
var router = express.Router();
const database = require('../lib/db');
const Posts = require('../model/posts');

/* GET users listing. */
router.get('/posts', async function(req, res, next) {
  const getAllPosts = await Posts.findAll();
  res.json(getAllPosts);
});

router.get('/posts/:id', async function(req, res, next) {
  const postId = req.params.id
  const getAllPosts = await Posts.findByPk(postId);
  res.json(getAllPosts);
  
});


module.exports = router;
