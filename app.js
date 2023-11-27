const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


const sequelize = require('./db/index');
const corsOptions = require('./middlewares/cors');
const incomeRoutes = require('./routers/incomeRouters');
const expenseRoutes = require('./routers/expenseRouters');
const grossIncomeRoutes = require('./routers/grossIncomeRouters');
const lossRoutes = require('./routers/lossRouters');
const undoRedoRouter = require('./routers/undoRedoRouter');


// @desc MIDDLEWARED 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors(corsOptions));

// @desc lOGGER MIDDLEWARES */
app.use((req, res, next) => {
   console.log('New request made');
   console.log(`Host: ${req.hostname}`);
   console.log(`URL: ${req.url}`);
   console.log(`Path: ${req.path}`);
   console.log(`Method: ${req.method}`);
   next()
});


// @desc connecting to the database
const connectDB = async () => {
   try {
      await sequelize.authenticate();
      console.log('Connected to DB');
   } catch (error) {
      console.log('Couldnt connect to DB');
   }
} 

connectDB()

// @ UserIncome Routes 
app.use('/income', incomeRoutes);

// @desc Expense Routes 
app.use('/expense', expenseRoutes);

// @desc Gross Income Routes
app.use(grossIncomeRoutes);

// @desc Loss Routes
app.use(lossRoutes);

// @desc Undo/Redo Routes 
app.use(undoRedoRouter);

// @desc Server Listening For Requests 
const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`Listening for requests on port ${port}`);
})