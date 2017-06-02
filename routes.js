const express = require('express');
const superagent = require('superagent');

const router = express.Router();

router.get('/', function(req, res) {

  superagent
    .get('http://localhost:3000/logins')
    .end((err, data) => {
      console.log(data.body)

      res.render('index', data.body);
    })
})

module.exports = router;