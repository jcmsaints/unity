const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/Resources"));
app.get('/', (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})