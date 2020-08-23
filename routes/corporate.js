var express       = require("express");
var router        = express.Router();

router.get("/corporateprograms" , function(req, res) {
	res.render("corporate");
})

module.exports = router;