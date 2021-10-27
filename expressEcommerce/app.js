const express = require('express');
const app = express();
const port = 5000;
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.use("/users",userRoute);
app.use("/products",productRoute);
app.use("/orders",orderRoute);
app.listen(port, () => console.log(`Example app listening on port port!`))