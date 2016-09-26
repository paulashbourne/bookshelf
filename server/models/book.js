import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Book Schema
 */
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn_10: {
    type: Number,
    required: true,
  },
  isbn_13: {
    type: Number,
    required: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
BookSchema.method({
});

/**
 * Statics
 */
BookSchema.statics = {
  /**
   * Get book
   * @param {ObjectId} id - The objectId of book.
   * @returns {Promise<Book, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((book) => {
        if (book) {
          return book;
        }
        const err = new APIError('No such book exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List books in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of books to be skipped.
   * @param {number} limit - Limit number of books to be returned.
   * @returns {Promise<Book[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  }
};

/**
 * @typedef Book
 */
export default mongoose.model('Book', BookSchema);
