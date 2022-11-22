const { send } = require('express/lib/response');
const { Show } = require('../models/index');
const { Op } = require("sequelize");
const res = require('express/lib/response');


const ShowsController = {};

// Endpoint para buscar todas las series:
ShowsController.getAll = (req, res) => {
  Show.findAll()
    .then(data => {
      res.send(data)
    })
};

// Endpoint para buscar series por id:
ShowsController.getShowById = async (req, res) => {
  try {
    let { id } = req.params;
    let resp = await models.Shows.findAll({
      where: {
        show_id: id,
      },
    });
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
};

// Endpoint para buscar serie por titulo:
ShowsController.getShowByTitle = async (req,res) =>{
  try {
    let { title } = req.params;
    let resp = await models.Shows.findAll({
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

//Endpoint para registrar una nueva serie
ShowsController.registerShow = (req, res) => {
  let title = req.body.title;
  let rate = req.body.rate;
  let synopsis = req.body.synopsis;
  let adult = req.body.adult;
  let genres = req.body.genres;

  Show.findAll({
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

      Show.create({
        title: title,
        rate: rate,
        synopsis: synopsis,
        adult: adult,
        genres: genres

      }).then(show => {
        res.send(`${show.title} fue añadida al repertorio de series`);
      })
        .catch((error) => {
          res.send(error);
        });

    } else {
      res.send("La serie que estas introduciendo ya existe");
    }
  }).catch(error => {
    res.send(error)
  });
};


//Endpoint para borrar una serie
ShowsController.deleteById = (req, res) => {
  let id = req.params.id;

  try {
    Show.destroy({
      where: { id: id },
      truncate: false
    })

      .then(showDeleted => {
        console.log(showDeleted);
        res.send(`La serie con la id ${id} fue eliminada`);
      })
  }
  catch (error) {
    send.error(error);
  }
};

//Endpoint para borrar todas las series
ShowsController.deleteAll = (req, res) => {
  try {

    Show.destroy({
      where: {},
      truncate: false
    })
      .then(seriesErased => {
        res.send(`Se han eliminado ${seriesErased} series`);
      })

  } catch (error) {
    res.send(error);
  }
};

module.exports = ShowsController;