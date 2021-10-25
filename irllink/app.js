const express = require('express')
const app = express()


app.get('/parkings', (req,res) => {
    res.send("Liste des parkings")
})


app.listen()

