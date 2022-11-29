const express = require("express");
const router = express.Router();
const authBearerMiddleware = require("../middlewares/auth")

const AuthController = require("../controllers/AuthController");


//Ver todos los usuarios
router.get("/", authBearerMiddleware, AuthController.findAll);

//Buscar usuario por ID
router.get("/:id", authBearerMiddleware, AuthController.findCurrentUser);

//Registro Usuarios
router.post("/register", AuthController.register);

//Login Usuarios
router.post("/login", AuthController.login);

//Modificar
router.put("/newpassword", authBearerMiddleware, AuthController.modifyCurrentUser);

//Borrar usuario
router.delete("/", authBearerMiddleware, AuthController.deleteUser);

module.exports = router;