const express = require('express')/* importing the module from library*/
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());


// API to call : searched movie
app.get('/search', function(req, res) {
    
    let url = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${req.query.searchKey}`;
    console.log(url);
    axios({
        method:'get',
        url
         })
    .then(function (response) {
        res.send(JSON.stringify(response.data.results));
    })
    .catch(function (error) {
        console.log(error);
    });
});

// API to call : list of all movies 
app.get('/getAll', function(req, res) {
    
    let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
    console.log(url);

    axios({
        method:'get',
        url
         })
    .then(function (response) {
        res.send(JSON.stringify(response.data.results));
    })
    .catch(function (error) {
        console.log(error);
    });
});

app.listen(4200, () => console.log(`Express server running on port 4200`));