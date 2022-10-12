const express = require('express');
const axios = require('axios');
const path = require('path');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, './build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get("/get_data/24hr_stats", (req, res) => {
    console.log('========================== req.query', req.query)
    axios.get(
        `https://api.kucoin.com/api/v1/market/stats?symbol=${req.query.get_symbol}`
    ).then(result => {
        console.log("24h ===  === ", result)
        res.send(result.data)
    })
})


app.listen(process.env.PORT || 9000, () => {
    console.log('express server listening on 9000');
});
