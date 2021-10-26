const express = require('express')
const url = require('url');
const path = require('path')
const app = express()

app.get('/twitchauth', (req,res) => {

    res.sendFile(path.join(__dirname+'/index.html'))

})

app.get('/token', (req,res) => {

    res.status(301).redirect(url.format({
        pathname:"dev.lezd.www.irllink:/",
        query: {
            "access_token:":req.query.access_token
        }
    }));

})

app.listen()

