const express = require("express");
const error = require("./middleware/error");

const genres = require("../routes/genres");
const customers = require("../routes/customers");
const users = require("../routes/users");
const auth = require("../routes/auth");
const returns = require("../routes/returns");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/customers", customers);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/returns", returns);
  app.use(error);
};
