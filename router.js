const router = require("express").Router();

const UserRouter = require ("./VIEWS/UserRouter");
const MoviesRouter = require("./VIEWS/MoviesRouter");
const OrdersRouter = require("./VIEWS/OrdersRouter");
const GenreRouter = require("./VIEWS/GenreRouter");

router.use("/users",UserRouter);
router.use("/movies", MoviesRouter);
router.use("/orders", OrdersRouter);
router.use("/genres", GenreRouter);

module.exports = router;