if (process.env.NODE_ENV == 'production') {
  module.exports = {
    googleClientID: process.env.googleClientID,
    googleClientSecret: process.env.googleClientSecret,
    mongoURL: process.env.MONGO_URL
  };
} else {
  module.exports = require('./dev');
}
