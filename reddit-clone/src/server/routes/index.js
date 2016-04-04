var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var helpers = require('../lib/helpers');

router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});

router.get('/getData/posts', function(req, res, next) {
  var data;
  return knex('posts')
  .catch(function(err) {
    res.status(500).send(err);
  })
  .then(function(postData) {
    data = postData;
  })
  .then(function() {
    return knex('comments');
  })
  .then(function(commentData) {
    return commentData.forEach(function(el, ind, arr) {
      for (i = 0; i < data.length; i++) {
        if (data[i].id === el.post_id) {
          data[i].comments.push(el);
        }
      }
    });
  })
  .then(function() {
    res.status(200).send(data);
  });
});

router.post('/addData/posts', function(req, res, next) {
  return knex('posts').insert({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    description: req.body.description,
    upvote: 0,
    date: req.body.date}, 'id')
    .catch(function(err) {
      console.log(err);
    })
    .then(function(data) {
      console.log(data);
    });
});

router.post('/addData/comments', function(req, res, next) {
  console.log(req.body);
  return knex('comments').insert({
    comm_author: req.body.comm_author,
    text: req.body.text,
    post_id: req.body.post_id
  }, 'post_id')
  .catch(function(err) {
    console.log(err);
  })
  .then(function(data) {
    res.status(200).send('comment added!');
  });
});

router.post('/upvote/:id', function(req, res, next) {
  var post = req.params.id;
  return knex('posts').update('upvote', req.body.vote)
  .where('id', post)
  .catch(function(err) {
    console.log(err);
  });
});

module.exports = router;
