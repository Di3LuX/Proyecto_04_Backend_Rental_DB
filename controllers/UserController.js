
const { User } = require("../models/index");
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UserController = {};


// Endpoint para ver todos los usuarios
UserController.getUsers = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data)
    })
};
// Endpoint para registrar un nuevo usuario
UserController.registerUser = async (req, res) => {

  // Registro usuarios 
  let name = req.body.name;
  let username = req.body.username;
  let email = req.body.email;
  let pass = req.body.pass;
  let age = req.body.age;


  //Guardamos en sequelize usuarios

  User.findAll({
    where: {

      [Op.or]: [
        {
          email: {
            [Op.like]: email
          }
        },
        {
          nickname: {
            [Op.like]: nickname
          }
        }
      ]

    }

  }).then(duplicate => {

    if (duplicate == 0) {

      User.create({
        name: name,
        username: username,
        email: email,
        pass: pass,
        age: age,
      }).then(user => {
        res.send(`${user.name}, es un placer tenerte entre nosotros`);
      })
        .catch((error) => {
          res.send(error);
        });

    } else {
      res.send("El usuario con ese e-mail ya existe, elige otro");
    }
  }).catch(error => {
    res.send(error)
  });
};

//Endpoint para loguearse 
UserController.loginUser = (req, res) => {

  let email = req.body.email;
  let password = req.body.password;

  User.findOne({
    where: { email: email }
  })
    .then(User => {

      if (!User) {
        res.send("Usuario o contraseña inválido");
      } else {

        if (bcrypt.compareSync(password, User.password)) {


          let token = jwt.sign({ user: User }, authConfig.secret, {
            expiresIn: authConfig.expires
          });

          res.json({
            user: User,
            token: token
          })

        } else {
          res.status(401).json({ msg: "Usuario o contraseña inválidos" });
        }
      };

    }).catch(error => {
      res.send(error);
    })
};

//Endpoint para modificar la contraseña
UserController.updatePassword = (req, res) => {

  let id = req.body.id;

  let oldPassword = req.body.oldPassword;

  let newPassword = req.body.newPassword;

  User.findOne({
    where: { id: id }
  }).then(userFound => {

    if (userFound) {

      if (bcrypt.compareSync(oldPassword, userFound.password)) {

        newPassword = bcrypt.hashSync(newPassword, Number.parseInt(authConfig.rounds));

        let data = {
          password: newPassword
        }

        User.update(data, {
          where: { id: id }
        })
          .then(updated => {
            res.send(updated);
          })
          .catch((error) => {
            res.status(401).json({ msg: `Ha ocurrido un error actualizando el password` });
          });

      } else {
        res.status(401).json({ msg: "Usuario o contraseña inválidos" });
      }


    } else {
      res.send(`Usuario no encontrado`);
    }

  }).catch((error => {
    res.send(error);
  }));

};

//Endpoint para buscar un usuario mediante un id
UserController.getUserId = (req, res) => {
  User.findByPk(req.params.id)
    .then(data => {
      res.send(data)
    })
};

//Endpoint para buscar un usuario mediante un email
UserController.getUserEmail = (req, res) => {
  User.findOne({ where: { email: req.params.email } })
    .then(data => {
      res.send(data)
    })
};

//Endpoint para eliminar usuarios
UserController.deleteAll = async (req, res) => {

  try {

    User.destroy({
      where: {},
      truncate: false
    })
      .then(usuariosEliminados => {
        res.send(`Se han eliminado ${usuariosEliminados} usuarios`);
      })

  } catch (error) {
    res.send(error);
  }

};

//Endpoint para eliminar usuario por ID
UserController.deleteById = (req, res) => {
  let id = req.params.id;

  try {
    User.destroy({
      where: { id: id },
      truncate: false
    })

      .then(userDeleted => {
        console.log(userDeleted);
        res.send(`El usuario con la id ${id} ha sido eliminado`);
      })
  }
  catch (error) {
    send.error(error);
  }
}
//Actualiza Datos por ID
UserController.updateProfile = async (req, res) => {

  let data = req.body;

  let id = req.params.id

  try {

    User.update(data, {
      where: { id: id }
    })
      .then(updated => {
        res.send(updated)
      })

  } catch (error) {
    res.send(error)
  }

};

module.exports = UserController;