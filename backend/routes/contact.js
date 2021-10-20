const router = require('express').Router();

router.route("/").get((req,res) => {
    res.send("contact!");
});

module.exports = router;