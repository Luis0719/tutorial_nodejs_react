const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});



//Get port from enviroment variables or default 5000 port
const PORT = process.env.PORT || 5000;
app.listen(PORT);