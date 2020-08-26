const models = require("../models");

const booksController = {
  async index(request, response, next) {
    const booksIndex = await models.Book.findAll()
    response.json({ books: booksIndex })
  },

  async show() {},
};

module.exports = booksController;