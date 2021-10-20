const router = require('express').Router();

router.route("/").get((req,res) => {
    res.send("about!");
});

module.exports = router;