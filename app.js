if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require('express')
const app = express();
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}))
mongoose.connect("mongodb://localhost:27017/Users", {
		useUnifiedTopology: true,
		useNewUrlParser: true
	},
	(err) => console.log(err));



app.set('view-engine', 'ejs');



app.use(flash())
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))



const homeRouter = require('./routes/home');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/', homeRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

/*logOut*/
app.delete('/logout', (req, res) => {
	req.logOut()
	res.redirect('/login')
})


app.listen(4040, () => console.log("server start in 4040"))