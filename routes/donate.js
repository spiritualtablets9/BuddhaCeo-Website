var express       = require("express");
var router        = express.Router();

router.get("/donate" , function(req, res) {
	res.render("donate");
})

module.exports = router;