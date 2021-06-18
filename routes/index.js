var express = require('express');
var router = express.Router();
// const dbConn = require('../lib/db');
const database = require('../lib/db');
const Posts = require('../model/posts');
const copyright = 'Blog do Paulo - 2021';

// router.get('/bdpost', function(req, res, next) {
//   dbConn.query('SELECT * FROM POSTS', function(err, rows) {
//     if(err) {
//       console.log('error', err);
//       res.json({data: ''});
//     } else {
//       res.json({data:rows});
//     }
//   })
// })

router.get('/', async function(req, res, next) { //meudominio.com
    const posts = await Posts.findAll();
    //console.log(posts);
  res.render('index', {title: 'home', copyright, posts })
});

router.get('/post/:id', async function(req, res, next) { //meudominio.com
  const post = await Posts.findByPk(req.params.id);
  console.log(post);
  res.render('post', {title: 'POST', copyright, post })
  res.end
});

router.get('/about', function (req, res, next) {
  res.render('about', {title: 'Sobre o autor', copyright })
})

router.get('/posts', function (req, res, next) {
  res.render('posts', {title: 'Meus posts', copyright})
})

router.get('/categories', function (req, res, next) {
  res.render('categories', {title: 'Categorias', copyright})
})

router.get('/contact', function(req, res, next) { //meudominio.com/contact
  res.render('contact', { title: 'Contato', copyright})
})

module.exports = router;
