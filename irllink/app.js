const express = require('express')
const url = require('url');
const app = express()

app.get('/twitchauth', (req,res) => {

    res.status(301).redirect(url.format({
        pathname:"http://localhost/",
        query: {
            "access_token:":req.query.access_token
        }
    }));

})

app.listen()

