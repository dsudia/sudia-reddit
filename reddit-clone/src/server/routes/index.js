var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var helpers = require('../lib/helpers');

router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});

router.get('/getData/posts', function(req, res, next) {
  return knex('posts')
  .then(function(data) {
    res.status(200).send(data);
  })
  .catch(function(err) {
    res.status(500).send(err);
  });
});

router.get('/getData/comments', function(req, res, next) {
  return knex('comments')
  .then(function(data) {
    res.status(200).send(data);
  })
  .catch(function(err) {
    res.status(500).send(err);
  });
});

router.post('/addData/posts', function(req, res, next) {
  console.log(req.body);
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

module.exports = router;
