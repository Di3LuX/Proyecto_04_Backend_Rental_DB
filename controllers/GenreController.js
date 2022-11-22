const { send } = require('express/lib/response');
const { Genre } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


const GenreController = {};


//Endpoint para buscar peliculas por genero
GenreController.getAll = (req, res) => {
  Genre.findAll()
    .then(data => {
      res.send(data)
    })
};

//Endpoint para registrar un nuevo genero
GenreController.registerGenre = (req, res) => {

  let body = req.body;

  Genre.create({
    name: body.name
  })
    .then(genre => {
      if (genre) {
        res.send(genre)
      } else {
        res.send("Fallo al introducir genero en la base de datos");
      }
    })
    .catch((error => {
      res.send(error)
    }))
};

//Endpoint para borrar un genero mediante su id
GenreController.deleteGenre = (req, res) => {
  let id = req.params.id;

  try {
    Genre.destroy({
      where: { id: id },
      truncate: false
    })

      .then(genreDeleted => {
        console.log(genreDeleted);
        res.send(`El genero con la id ${id} ha sido eliminado`);
      })
  }
  catch (error) {
    send.error(error);
  }
};

//Endpoint para borrar todos los generos
GenreController.deleteAll = (req, res) => {
  try {

    Genre.destroy({
      where: {},
      truncate: false
    })
      .then(genre => {
        res.send(`Se han eliminado ${genre} generos`);
      })

  } catch (error) {
    res.send(error);
  }
};



module.exports = GenreController;