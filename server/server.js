const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => { // match toute les url qui n'éxiste pas
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(3000, () => {
    console.log('Listen port 3000');
});
