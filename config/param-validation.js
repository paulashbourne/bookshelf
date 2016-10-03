import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().required()
    }
  },

  // POST /api/books
  createBook: {
    body: {
      volumeId: Joi.string().required(),
      ownerId: Joi.required(),
      heldById: Joi.required()
    }
  },

  // UPDATE /api/books/:userId
  updateBook: {
    body: {
      volumeId: Joi.string().required(),
      ownerId: Joi.required(),
      heldById: Joi.required()
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
