const express = require('express');
const router = express.Router();
const DoggySitter = require('../models/doggy-sitters');

router.get('/', function (req, res) {
    DoggySitter.find((err, doggySitters) => {
        if (err) {
            console.log('error: /api/doggysitters', err);
        }

        console.log('sending doggysitters', doggySitters)
        res.json(doggySitters)
    });
});



router.get('/createDbScript', (req, res) => {

    var sitter = new DoggySitter({
        FullName: "idan baal haness",
        Location: "Natanya",
        Price: 566,
        Rate: 4.6
    });

    sitter.save((error, x) => {
        if (error) console.log('save error', error);
    });

    res.send('ok')

});

module.exports = router;
