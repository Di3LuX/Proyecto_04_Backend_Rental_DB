const { send } = require('express/lib/response');
const { Genre } = require('../models/index');

const GenreController = {};


// Endpoint para buscar generos:
GenreController.getAllGenres = (req, res) => {
  Genre.findAll()
    .then(data => {
      res.send(data)
    })
};

// Endpoint para registrar un nuevo genero:
GenreController.registerGenre = (req, res) => {

  let body = req.body;

  Genre.create({
    name: body.name
  })
    .then(genre => {
      if (genre) {
        res.send(genre)
      } else {
        res.send("Error a la hora de introducir el nuevo genero");
      }
    })
    .catch((error => {
      res.send(error)
    }))
};

// Endpoint para borrar un genero por su id:
GenreController.deleteGenre = (req, res) => {
  let id = req.params.id;

  try {
    Genre.destroy({
      where: { id: id },
      truncate: false
    })

      .then(genreDeleted => {
        console.log(genreDeleted);
        res.send(`El genero con la id ${id} fue eliminado`);
      })
  }
  catch (error) {
    send.error(error);
  }
};

// Endpoint para borrar todos los generos:
GenreController.deleteAll = (req, res) => {
  try {

    Genre.destroy({
      where: {},
      truncate: false
    })
      .then(genre => {
        res.send(`Se han eliminado los generos de ${genre}`);
      })

  } catch (error) {
    res.send(error);
  }
};

module.exports = GenreController;