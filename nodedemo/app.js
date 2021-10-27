const express = require('express')
const app = express()
const port = 3000
const users = require("./router/users");
const product = require("./router/product")
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/users",users);
app.use("/ps",product);
app.listen(port, () => console.log(`Example app listening on port port!`))