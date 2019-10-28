const express = require('express')
const app = express();

app.set('view-engine', 'ejs');



const homeRouter = require('./routes/home');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/', homeRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(4040, () => console.log("server start in 4040"))