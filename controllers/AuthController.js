
const { User } = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authConfig } = require("../config/auth");
const AuthController = {};

// Registro de usuario

AuthController.register = (req, res) => {

  // Encriptamos la contraseña
  let pass = bcrypt.hashSync(req.body.pass, 10);

  // Crear un usuario
  const userRegistred = 
  User.create({
    name: req.body.name,
    username: req.body.username,
    age: req.body.age,
    mail: req.body.mail,
    pass: pass
  }).then(user => {

    // Creamos el token
    let token = jwt.sign({ user: user }, authConfig.secret, {
      expiresIn: authConfig.expires
    });

    res.json({
      // user: user,
      // token: token,
      userRegistred
    });

  }).catch(error => {
    res.status(500).json(error);
  });

};

// -----------------------------------------------------------------------------------

// Login de usuario

AuthController.login = (req, res) => {
  let { mail, pass } = req.body;
  user.findOne({
    where: { mail: mail }
  }).then(user => {
    if (!user) {
      res.status(404).json({ msg: "Usuario no encontrado" });
    } else {
      if (bcrypt.compareSync(pass, user.pass)) {
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires
        });
        res.json({
          user: user,
          token: token
        })
      } else {
        res.status(401).json({ msg: "Contraseña incorrecta" })
      }
    }
  }).catch(error => {
    res.status(500).json(error);
  })
};

// -------------------------------------------------------------------------------------

// Traer todos los datos de perfil de usuario (Solamente Admin puede)

AuthController.findAll = async (req, res) => {
  try {
    const users = await models.user.findAll();
    return res.status(200).json(users);
  } catch (error) {
    res.send(error);
  }
};

// Traer los datos de tu usuario

AuthController.findCurrentUser = async (req, res) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  try {
    let id = payload.id_user;
    let resp = await models.user.findAll({
      where: {
        id: id,
      },
    });
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
}

// Modificar tu usuario

AuthController.modifyCurrentUser = async (req, res) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
  if (req.body.mail !== payload.mail) {
    throw new Error("Solo puedes modificar tu cuenta")
    return
  }
  try {
    let data = req.body;
    let resp = await models.user.update({
      name: data.name,
      username: data.username,
      age: data.age
    }, { where: { mail: data.mail } })
    res.send("Se ha actualizado el registro correctamente")
  } catch (error) {
    res.send(error)
  }
}

// Eliminar usuario(Solamente el Admin puede hacerlo)

AuthController.deleteUser = async (req, res) => {
  try {
    let userMail = req.params.mail;
    let resp = await models.user.destroy({
      where: {
        mail: userMail,
      }
    })
    if (resp === 1) {
      res.send("Borraste el usuario")
    } else {
      res.send("No hay usuario con ese mail");
    }
  } catch (error) {
    res.send(error)
  }
}

module.exports = AuthController;
