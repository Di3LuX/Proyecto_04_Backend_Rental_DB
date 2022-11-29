const express = require("express");
const router = express.Router();
const authBearerMiddleware= require("../middlewares/auth")


const GenreController = require("../controllers/GenreController");

//Endpoint para ver todos los generos
router.get("/", GenreController.getAll);

//Endpoint para registrar un nuevo genero
router.post("/", authBearerMiddleware, GenreController.registerGenre);

//Endpoint para borrar un genero mediante su id
router.delete("/:id", authBearerMiddleware, GenreController.deleteGenre);

//Endpoint para borrar todos los generos
router.delete("/", authBearerMiddleware, GenreController.deleteAll);


module.exports = router;