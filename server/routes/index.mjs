const userRoutes = require('./userRoutes');
const accountRoutes = require('./accountRoutes');
const transactionRoutes = require('./transactionRoutes');

const route = (app) => {
  userRoutes(app);
  accountRoutes(app);
  transactionRoutes(app);
};

export default route;
