/**
 * [homepageCrl description]
 * @method homepageCrl
 * @param  {[type]}    req [description]
 * @param  {[type]}    res [description]
 * @return {[type]}        [description]
 */
module.exports.homepageCrl = (req, res) => {
  res.send({ result: 'works' });
};

module.exports.loginCrl = (req, res) => {
  const user = req.user;
  res.send({ result: 'LOGIN', user });
};
