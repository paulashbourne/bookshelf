import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

import User from '../models/user';

chai.config.includeStack = true;

describe('## Book APIs', () => {
  var user = new User({ username: 'foo@bar.com' });
  user.save();

  let book = {
    title: 'The Little Prince',
    isbn_10: 8180320596,
    isbn_13: 9788180320590,
    ownerId: user.id
  };

  describe('# POST /api/books', () => {
    it('should create a new book', (done) => {
      request(app)
        .post('/api/books')
        .send(book)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.title).to.equal(book.title);
          expect(res.body.isbn_10).to.equal(book.isbn_10);
          expect(res.body.isbn_13).to.equal(book.isbn_13);
          expect(res.body.ownerId).to.equal(book.ownerId);
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
          expect(res.body.title).to.equal(book.title);
          expect(res.body.isbn_10).to.equal(book.isbn_10);
          expect(res.body.isbn_13).to.equal(book.isbn_13);
          expect(res.body.ownerId).to.equal(book.ownerId);
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
      book.title = 'New Title';
      request(app)
        .put(`/api/books/${book._id}`)
        .send(book)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.title).to.equal('New Title');
          expect(res.body.isbn_10).to.equal(book.isbn_10);
          expect(res.body.isbn_13).to.equal(book.isbn_13);
          expect(res.body.ownerId).to.equal(book.ownerId);
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
          expect(res.body.title).to.equal(book.title);
          expect(res.body.isbn_10).to.equal(book.isbn_10);
          expect(res.body.isbn_13).to.equal(book.isbn_13);
          expect(res.body.ownerId).to.equal(book.ownerId);
          done();
        })
        .catch(done);
    });
  });
});
