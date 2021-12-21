module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/users', require('./routes/users.route'));

};