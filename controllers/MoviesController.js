const { send } = require('express/lib/response');
const { Movie } = require('../models/index');
const { Op } = require("sequelize");
const axios= require("axios");
const res = require('express/lib/response');


const MoviesController = {};

// Endpoint para buscar todas las peliculas:
MoviesController.getAll = (req, res) => {
  Movie.findAll()
    .then(data => {
      res.send(data)
    })
};

// Endpoint para buscar películas por id:
MoviesController.getMovieById = async (req, res) => {
  try {
    let { id } = req.params;
    let resp = await models.Movies.findAll({
      where: {
        movie_id: id,
      },
    });
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
};

// Endpoint para buscar pelicula por titulo:
MoviesController.getMovieByTitle = async (req,res) =>{
  try {
    let { title } = req.params;
    let resp = await models.Movies.findAll({
      where: {
        title: title
      }
    }
    );
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
}
//Endpoint para registrar una nueva pelicula
MoviesController.registerMovie = (req, res) => {
  let title = req.body.title;
  let rate = req.body.rate;
  let synopsis = req.body.synopsis;
  let adult = req.body.adult;
  let genres = req.body.genres;

  Movie.findAll({
    where: {

      [Op.or]: [
        {
          title: {
            [Op.like]: title
          }
        }
      ]

    }

  }).then(datosRepetidos => {

    if (datosRepetidos == 0) {

      Movie.create({
        title: title,
        rate: rate,
        synopsis: synopsis,
        adult: adult,
        genres: genres

      }).then(movie => {
        res.send(`${movie.title} fue añadida al repertorio de peliculas`);
      })
        .catch((error) => {
          res.send(error);
        });

    } else {
      res.send("La pelicula que estas introduciendo ya existe");
    }
  }).catch(error => {
    res.send(error)
  });
};


//Endpoint para borrar una pelicula
MoviesController.deleteById = (req, res) => {
  let id = req.params.id;

  try {
    Movie.destroy({
      where: { id: id },
      truncate: false
    })

      .then(movieDeleted => {
        console.log(movieDeleted);
        res.send(`La pelicula con la id ${id} fue eliminada`);
      })
  }
  catch (error) {
    send.error(error);
  }
};

//Endpoint para borrar todas las peliculas
MoviesController.deleteAll = (req, res) => {
  try {

    Movie.destroy({
      where: {},
      truncate: false
    })
      .then(peliculasErased => {
        res.send(`Se han eliminado ${peliculasErased} peliculas`);
      })

  } catch (error) {
    res.send(error);
  }
};

module.exports = MoviesController;