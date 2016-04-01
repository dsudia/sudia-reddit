var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('DB routes', function() {

    beforeEach(function(done) {
        knex.migrate.rollback().then(function() {
            knex.migrate.latest()
            .then(function() {
                return knex.seed.run().then(function() {
                    done();
                });
            });
        });
    });

    afterEach(function(done) {
        knex.migrate.rollback().then(function() {
            done();
        });
    });

    describe('Get all posts', function() {

        it('should get all posts', function(done) {
            chai.request(server)
            .get('/getData/posts')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.equal(3);
                res.body[0].should.have.property('id');
                res.body[0].id.should.equal(1);
                res.body[0].should.have.property('title');
                res.body[0].title.should.equal('Aspens in Fall');
                res.body[0].should.have.property('author');
                res.body[0].author.should.equal('Dave');
                done();
            });
        });

    });

    describe('Get all comments', function() {

        it('should get all comments', function(done) {
            chai.request(server)
            .get('/getData/comments')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.equal(3);
                res.body[0].should.have.property('comm_author');
                res.body[0].comm_author.should.equal('Mike');
                res.body[0].should.have.property('post_id');
                res.body[0].post_id.should.equal(1);
                done();
            });
        });

    });

});
