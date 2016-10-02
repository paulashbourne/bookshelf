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
