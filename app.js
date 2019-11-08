if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require('express')
const app = express();
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session');
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}))


mongoose.connect(process.env.DB_CONNECTION, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
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
		res.header('Access-Control-Allow-Methods', 'PUT', 'GET', 'PATCH', 'DELETE', 'POST', 'UPDATE')
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
const BenefitRouter = require('./routes/Benefit');
const BenefitHistoryRouter = require('./routes/BenefitHistory');
const allUsersRouter = require('./routes/allUsers');
const OpenPositionRouter = require('./routes/OpenPosition');
const candidatRouter = require('./routes/Candidats');
const TicketListRouter = require('./routes/TicketList');

app.use('/', homeRouter);
app.use('/signup', registerRouter);
app.use('/allbenefits', BenefitRouter);
app.use('/allbenefitshistory', BenefitHistoryRouter);
app.use('/allusers', allUsersRouter);
app.use('/allopenpositions', OpenPositionRouter);
app.use('/allcandidats', candidatRouter);
app.use('/ticketlists', TicketListRouter);

app.models = {
	users: require('./models/User'),
	benefits: require('./models/Benefit')
}

app.services = {
	users: new(require('./services/Users'))(app.models),
	benefits: new(require('./services/Benefits'))(app.models)
};

app.use(function (req, res, next) {
	req.app = app;
	next();
});


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

module.exports = app;