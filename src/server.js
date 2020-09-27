const express = require('express');

const app = express();

app.get('/', (req, res) => {

    return res.json({message: 'Welcome to my api!'})
})

app.listen(4000, () => {
    console.log('server has started!')
})