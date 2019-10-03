const express = require('express')
const user = require('./routes/user')
const mongoose = require('mongoose')

const app = new express()
mongoose.connect('mongodb://localhost:27017/admin', {useNewUrlParser: true, useUnifiedTopology: true})


app.use(user)

app.get('/', (req, res) => {
	 return res.send('A');
 });

app.listen(3333)
