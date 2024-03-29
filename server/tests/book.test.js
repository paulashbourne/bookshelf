import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

import User from '../models/user';

chai.config.includeStack = true;

describe('## Book APIs', () => {
  var user = new User({ username: 'foo@bar.com' });
  var user2 = new User({ username: 'hello@bar.com' });

  user.save();
  user2.save();

  let book = {
    volumeId: 'random_id_123',
    ownerId: user.id,
    heldById: user.id
  };

  describe('# POST /api/books', () => {
    it('should create a new book', (done) => {
      request(app)
        .post('/api/books')
        .send(book)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.volumeId).to.equal(book.volumeId);
          expect(res.body.ownerId).to.equal(user.id);
          expect(res.body.heldById).to.equal(user.id);
          book = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/books/:bookId', () => {
    it('should get book details', (done) => {
      request(app)
        .get(`/api/books/${book._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.volumeId).to.equal(book.volumeId);
          expect(res.body.ownerId).to.equal(book.ownerId);
          expect(res.body.heldById).to.equal(book.heldById);
          done();
        })
        .catch(done);
    });

    it('should report error with message - Not found, when book does not exists', (done) => {
      request(app)
        .get('/api/books/56c787ccc67fc16ccc1a5e92')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/books/:bookId', () => {
    it('should update book details', (done) => {
      book.ownerId = user2.id;
      request(app)
        .put(`/api/books/${book._id}`)
        .send(book)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.volumeId).to.equal(book.volumeId);
          expect(res.body.ownerId).to.equal(user2.id);
          expect(res.body.heldById).to.equal(book.heldById);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/books/', () => {
    it('should get all books', (done) => {
      request(app)
        .get('/api/books')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.equal(1);
          done();
        })
        .catch(done);
    });
  });

  describe(`# GET /api/books?ownerId=${user._id}`, () => {
    it('should get all books', (done) => {
      request(app)
        .get(`/api/books?ownerId=${user._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.equal(0);
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/books/', () => {
    it('should delete book', (done) => {
      request(app)
        .delete(`/api/books/${book._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.volumeId).to.equal(book.volumeId);
          expect(res.body.ownerId).to.equal(book.ownerId);
          expect(res.body.heldById).to.equal(book.heldById);
          done();
        })
        .catch(done);
    });
  });
});
