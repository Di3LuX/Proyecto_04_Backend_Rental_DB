const router = require("express").Router();

const UserRouter = require ("./views/UserRouter");
const MoviesRouter = require("./views/MoviesRouter");
const ShowsRouter = require("./views/ShowsRouter");
const OrdersRouter = require("./views/OrdersRouter");
const GenreRouter = require("./views/GenreRouter");

router.use("/users", UserRouter);
router.use("/movies", MoviesRouter);
router.use("/shows", ShowsRouter);
router.use("/orders", OrdersRouter);
router.use("/genres", GenreRouter);

module.exports = router;