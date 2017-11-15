/**
 * [homepageCrl description]
 * @method homepageCrl
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
module.exports.homepageCtrl = (req, res) => {
  res.send({ result: 'works' });
};

module.exports.loginCtrl = (req, res) => {
  const user = req.user;
  res.send({ result: 'LOGIN', user });
};

module.exports.currentUserCtrl = (req, res) => {
  const user = req.user;
  res.send(user);
};

/**
 * http://www.passportjs.org/docs#log-out
 * @method logout
 */
module.exports.logoutCtrl = (req, res) => {
  req.logout(); //Clear user
  res.send(req.user); //Return empty
};
