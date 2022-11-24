const express = require("express");
const router = express.Router();
const { authBearerMiddleware, isAdmin } = require("../middlewares/auth.middleware")


const AuthController = require("../controllers/AuthController");


//Ver todos los usuarios
router.get("/", authBearerMiddleware, isAdmin, AuthController.findAll);

//Buscar usuario por ID
router.get("/:id", authBearerMiddleware, isAdmin, AuthController.findCurrentUser);

//Registro Usuarios
router.post("/register", AuthController.register);

//Login Usuarios
router.post("/login", AuthController.login);

//Modificar
router.put("/newpassword", authBearerMiddleware, isAdmin, AuthController.modifyCurrentUser);

//Borrar usuario
router.delete("/", authBearerMiddleware, isAdmin,  AuthController.deleteUser);

module.exports = router;