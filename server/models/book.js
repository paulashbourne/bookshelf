import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Book Schema
 */
const BookSchema = new mongoose.Schema({
  volumeId: {
    type: String,
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  heldById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

BookSchema.method({
});

BookSchema.statics = {
  get(id) {
    return this.findById(id)
      .exec()
      .then((book) => {
        if (book) {
          return book;
        }

        const err = new APIError('No such book exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      })
  },

  list({ skip = 0, limit = 50, user_ids } = {}) {
    var filtered;

    if (user_ids.length == 0){
      filtered = this.find();
    } else if (user_ids.length == 1) {
      filtered = this.find({ ownerId: user_ids[0] });
    } else {
      filtered = this.where('ownerId').in(user_ids);
    }

    return filtered
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  }
};

export default mongoose.model('Book', BookSchema);
