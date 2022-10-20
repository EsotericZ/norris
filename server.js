const express = require('express');
const axios = require('axios');
const Quote = require('./assets/Quote');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('assets'));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        let quote = response.data.value;
        console.log(quote);
        res.send(Quote(quote));
    } catch (error) {
        console.error(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost: ${PORT}`);
});