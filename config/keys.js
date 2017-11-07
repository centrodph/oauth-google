if (process.env.NODE_ENV == 'production') {
  module.exports = {
    googleClientID: process.env.googleClientID,
    googleClientSecret: process.env.googleClientSecret
  };
} else {
  module.exports = require('./dev');
}
