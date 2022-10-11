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

app.get("/get_data", (req, res) => {
    let response = null;
    response = axios.get(
        // "https://api-futures.kucoin.com/api/v1/kline/query?symbol=SOLUSDTM&granularity=100",
        " https://api-futures.kucoin.com/api/v1/kline/query?symbol=SOLUSDTM&granularity=480"
    );

    response.then(result => {
        console.log("data   === ", result)
        res.send(result.data)
    })


})


app.listen(process.env.PORT || 3001, () => {
    console.log('express server listening on 3001');
});
