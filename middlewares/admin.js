
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

  let token = req.headers.authorization.split(' ')[1];

  let { user } = jwt.decode(token, authConfig.secret)

  try {
    if (user.role) {
      next();
    } else {
      res.status(403).send({ msg: `Eh! No estas autorizado!` });
    }
  } catch (error) {
    res.status(400).json({
      msg: `Algo pasó`,
      error: error
    });
  }
};