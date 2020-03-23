const express = require("express");
const router = express.Router();

//@router gets api/users/test
//@desc test user route
//access Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
