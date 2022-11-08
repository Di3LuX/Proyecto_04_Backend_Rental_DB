const router = require("express").Router();

const UserRouter = require ("./routes/UserRouter");
const MoviesRouter = require("./routes/MoviesRouter");
const ShowsRouter = require("./routes/ShowsRouter");
const OrdersRouter = require("./routes/OrdersRouter");
const GenreRouter = require("./routes/GenreRouter");

router.use("/users", UserRouter);
router.use("/movies", MoviesRouter);
router.use("/shows", ShowsRouter);
router.use("/orders", OrdersRouter);
router.use("/genres", GenreRouter);

module.exports = router;