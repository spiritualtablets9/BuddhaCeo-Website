var express       = require("express");
var router        = express.Router();

router.get("/" , function(req, res) {
	res.render("home");
})

router.get("/about" , function(req, res) {
	res.render("about");
})

router.get("/ourprograms" , function(req, res) {
	res.render("programs");
})

router.get("/donations" , function(req, res) {
	res.render("donate");
})

router.get("/resources" , function(req, res) {
	res.redirect("https://www.blog.buddhaceo.org/");
})

router.get("/corporateprograms" , function(req, res) {
	res.render("corporate");
})

router.get("/contact" , function(req, res) {
	res.render("contact");
})

router.get("/meditation40d" , function(req, res) {
	res.redirect("https://www.events.buddhaceo.org/event-details/6-week-guided-meditation-online-program-sep");
})

router.get("/programs" , function(req, res) {
	res.redirect("https://www.events.buddhaceo.org/");
})

module.exports = router;
