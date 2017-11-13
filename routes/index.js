const static = require('../controllers/static');
const oauthGoogle = require('../controllers/oauth-google');

module.exports = app => {
  /**
   * @api {get} / Home Page
   * @apiGroup STATIC PAGES
   *
   * @apiSuccess {Json} result.
   */
  app.get('/', static.homepageCrl);

  /**
   * @api {get} /auth/google Init Google Auth Flow
   * @apiGroup OAUTH
   *
   * @apiSuccess {Json} result.
   */
  app.get('/auth/google', oauthGoogle.googleAuth);
  /**
   * @api {get} /auth/google/callback google callback
   * @apiGroup OAUTH
   *
   * @apiSuccess {Json} result.
   */
  app.get(
    '/auth/google/callback',
    oauthGoogle.googleAuthCallback,
    static.loginCrl
  );
};
