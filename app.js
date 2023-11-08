const express = require('express');
const app = express();
const morgan = require('morgan');

const incomeRoutes = require('./routers/incomeRouters');
const expenseRoutes = require('./routers/expenseRouters');
const grossIncomeRoutes = require('./routers/grossIncomeRouters');
const lossRoutes = require('./routers/lossRouters');

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

/* Logger Middleware */
app.use((req, res, next) => {
   console.log('New request made');
   console.log(`Host: ${req.hostname}`);
   console.log(`URL: ${req.url}`);
   console.log(`Path: ${req.path}`);
   console.log(`Method: ${req.method}`);
   next()
});

/* UserIncome Routes */
app.use(incomeRoutes);

/* Expense Routes */
app.use(expenseRoutes);

/* Gross Income Routes */
app.use(grossIncomeRoutes);

/* Loss Routes */
app.use(lossRoutes);

/* Server Listening For Requests */
app.listen(6000, () => {
   console.log('Listening for requests');
})