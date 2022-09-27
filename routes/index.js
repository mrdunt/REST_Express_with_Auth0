var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.render("index", 
    {   title: "Express auth 0", 
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user
    });
});

module.exports = router;