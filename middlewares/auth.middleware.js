const { validUserPass } = require("../services/authorization.services");
const jsonwebtoken = require("jsonwebtoken");

const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  // const [strategy, jwt] = authorization.split(" ");
  try {
    if (strategy.toLowerCase() !== "bearer") {
      throw new Error();
    }
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    const created = payload.iat*1000;
    const timeElapsed = Date.now() - created;
    const MAX_TIME = Number(process.env.MAX_TIME_JWT_CADUCITY) ||
      1000 * 60 * 60 * 24;
      const isValid = timeElapsed && created && MAX_TIME &&
      (timeElapsed < MAX_TIME);
    if (!isValid) {
      throw new Error("El token expiró");
    }

    req.auth = payload;
    next();

  } catch (error) {
    res.status(401).json({ message: "No estas autenticado, logueate"});
    return;
  }

};


const isValidRoleAdmin =  (req, res, next) => {
  if (req.auth?.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: "No estas autorizado" });
  }
}


const isValidRole = (role)  =>  (req, res, next) => {
  if (req.auth?.role === role) {
    next();
  } else {
    res.status(403).json({ message: "No estas autorizado" });
  }
}

const isAdmin = (req,res,next) =>{
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  if (payload.rolIdRol === 1) {
      next();
    } else {
      res.status(403).json({ message: "No estas autorizado" });
    }
}

module.exports = { authBearerMiddleware, isValidRoleAdmin , isValidRole, isAdmin};
