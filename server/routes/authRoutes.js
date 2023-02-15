const {
  register,
  login,
  getallusers,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allusers/:id", getallusers);

module.exports = router;
