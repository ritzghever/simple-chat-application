const {
  addMessage,
  getAllMessages,
} = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg", addMessage);
router.post("/getmessages", getAllMessages);

module.exports = router;
