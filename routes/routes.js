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

router.get("/meru" , function(req, res) {
	res.redirect("https://www.events.buddhaceo.org/event-details/master-your-mind-season-2-a-guided-meditation-for-confidence-manifestation-3-weeks");
})

router.get("/ganga" , function(req, res) {
	res.redirect("https://www.events.buddhaceo.org/event-details/ganga-a-6-weeks-guided-meditation-online-program-2");
})

router.get("/Atlas" , function(req, res) {
	res.redirect("https://www.events.buddhaceo.org/event-details/master-your-mind-season-3-a-guided-meditation-for-confidence-manifestation-3-weeks");
})

router.get("/donate" , function(req, res) {
	res.redirect("https://milaap.org/fundraisers/support-buddha-ceo-quantum-foundation?utm_source=whatsapp&utm_medium=thank_you&mlp_referrer_id=3654504");
})
router.get("/indus" , function(req, res) {
	res.redirect("https://www.events.buddhaceo.org/event-details/eye-jan");
})






module.exports = router;
