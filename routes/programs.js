var express       = require("express");
var router        = express.Router();

router.get("/events/programs" , function(req, res) {
	res.render("programs");
})

module.exports = router;