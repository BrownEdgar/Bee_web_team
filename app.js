if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require('express')
const app = express();
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')


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

//CORS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept Authorization"
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT', 'GET', 'PATCH', 'DELETE', 'POST')
		res.status(200).json({});
	}
	next(); //partadir
});

app.set('view-engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(flash())
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());




const homeRouter = require('./routes/home');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const BenefitRouter = require('./routes/Benefit');
const BenefitHistoryRouter = require('./routes/BenefitHistory');
const allUsersRouter = require('./routes/allUsers');
const OpenPositionRouter = require('./routes/OpenPosition');
const candidatRouter = require('./routes/Candidats');

app.use('/', homeRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/allbenefits', BenefitRouter);
app.use('/allbenefitshistory', BenefitHistoryRouter);
app.use('/allusers', allUsersRouter);
app.use('/allCandidats', candidatRouter);


app.use((req, res, next) => {
	const error = new Error("not found");
	error.status = 404; 
	next(error);
})

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
})

app.listen(4040, () => console.log("server start in 4040"))