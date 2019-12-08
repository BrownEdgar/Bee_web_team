if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const mongoose = require("mongoose");
const models = require("./models");
const sevices = require("./services");
const cornCheck = require("./helpers/addVocationDeys");
const { ErrorMessage, Errors } = require('./helpers/error');
const Error = new Errors();



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
const corsOptions = {
	origin: true,
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}))


const homeRouter = require('./routes/home');
const authRouter = require('./routes/auth');
const BenefitRouter = require('./routes/Benefit');
const BenefitHistoryRouter = require('./routes/BenefitHistory');
const allUsersRouter = require('./routes/allUsers');
const OpenPositionRouter = require('./routes/OpenPosition');
const candidatRouter = require('./routes/Candidats');
const TicketListRouter = require('./routes/TicketList');

app.use('/', homeRouter);
app.use('/signup', authRouter);
app.use('/benefits', BenefitRouter);
app.use('/benefits-historys', BenefitHistoryRouter);
app.use('/users', allUsersRouter);
app.use('/open-positions', OpenPositionRouter);
app.use('/candidats', candidatRouter);
app.use('/ticket-lists', TicketListRouter);


app.models = {
	users: models.User,
	benefits: models.Benefit, 
	openPosition: models.OpenPosition, 
	candidat: models.Candidats, 
	benefitsHistory: models.BenefitsHistory, 
	ticketList: models.TicketList
}

app.services = {	
	users: new(sevices.User)(app.models), 
	benefits: new(sevices.Benefit)(app.models), 
	openPositions: new(sevices.OpenPosition)(app.models), 
	candidats: new(sevices.Candidat)(app.models), 
	benefitsHistorys: new(sevices.BenefitsHistory)(app.models), 
	ticketLists: new(sevices.TicketList)(app.models)
};

app.use(function (req, res, next) {
	req.app = app;
	next();
});


app.use((req, res, next) => {
	 throw Error.notFoundError(res, 'page is not found')
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