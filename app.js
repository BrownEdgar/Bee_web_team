const express = require('express')
const app = express();

app.get('/',  (req, res) => {
	res.send("home page")
})


app.listen(4040, () => console.log("server start in 4040"))