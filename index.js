const express = require('express');
const cors = require('cors');
const app = express();
const prot = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('We will Learn Programming')
});

app.listen(prot, () => {
    console.log('we will learn Programming', prot)
})
