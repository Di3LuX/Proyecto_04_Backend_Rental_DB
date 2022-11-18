const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth.js');


const UserController = require("../controllers/UserController");


//Ver todos los usuarios
router.get("/", auth, admin, UserController.getUsers);

//Buscar usuario por ID
router.get("/:id", auth, UserController.getUserId);

//Buscar usuario por Email
router.get("/email/:email", auth, UserController.getUserEmail);

//Registro Usuarios
router.post("/", UserController.registerUser);

//Login Usuarios
router.post("/login", UserController.loginUser);

//Modificar Password
router.put("/newpassword", auth, UserController.updatePassword);

//Borrar usuarios
router.delete("/", auth, admin,  UserController.deleteAll);

//Borrar usuario mediante su id
router.delete("/delete/:id",auth,  admin,  UserController.deleteById);

//Actualiza datos de usuarios en la DB
router.put('/:id', auth, UserController.updateProfile);

module.exports = router;