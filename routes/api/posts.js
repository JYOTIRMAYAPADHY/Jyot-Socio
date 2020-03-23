const express = require("express");
const router = express.Router();

//@router gets api/post/test
//@desc test user route
//access Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
