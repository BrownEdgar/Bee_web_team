if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

import express from 'express';
const app = express();
import cors from 'cors'
import { handleError, ErrorHandler } from './middleware/ErrorHendler';
import session from 'express-session';
import mongoose from "mongoose";
import models from "./models";
import sevices from "./services";


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


import homeRouter from './routes/home';
import registerRouter from './routes/register';
import BenefitRouter from './routes/Benefit';
import BenefitHistoryRouter from './routes/BenefitHistory';
import allUsersRouter from './routes/allUsers';
import OpenPositionRouter from './routes/OpenPosition';
import candidatRouter from './routes/Candidats';
import TicketListRouter from './routes/TicketList';

app.use('/', homeRouter);
app.use('/signup', registerRouter);
app.use('/benefits', BenefitRouter);
app.use('/benefits-history', BenefitHistoryRouter);
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
	 throw new ErrorHandler(404, 'page is not found')
})

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
})
app.use((err, req, res, next) => {
	handleError(err, res);
});

export default app;