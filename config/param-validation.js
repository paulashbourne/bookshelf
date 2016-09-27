import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/books
  createBook: {
    body: {
      title: Joi.string().required(),
      isbn_10: Joi.number().integer().required(),
      isbn_13: Joi.number().integer().required(),
      ownerId: Joi.required()
    }
  },

  // UPDATE /api/books/:userId
  updateBook: {
    body: {
      title: Joi.string().required(),
      isbn_10: Joi.number().integer().required(),
      isbn_13: Joi.number().integer().required(),
      ownerId: Joi.required()
    },
    params: {
      bookId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
