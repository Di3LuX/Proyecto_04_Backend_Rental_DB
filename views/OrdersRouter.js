const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/OrdersController");

//Endpoint para registrar un nuevo pedido
router.post("/", OrdersController.placeNewOrder);

//Endpoint para ver todos los pedidos
router.get("/", OrdersController.allOrders);

//Endpoint para ver pedidos por idUser
router.get("/usuario/:id", OrdersController.getOrdersById);

//ENdpoint para borrar un pedido mediante su id
router.delete("/:id", OrdersController.deleteOrderById);

//Endpoint para borrar todos los pedidos
router.delete("/deleteAll/:id", OrdersController.deleteAll);


module.exports = router;