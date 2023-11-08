import userRoutes from './userRoutes.mjs';
import accountRoutes from './accountRoutes.mjs';
import transactionRoutes from './transactionRoutes.mjs';

const route = (app) => {
  userRoutes(app);
  accountRoutes(app);
  transactionRoutes(app);
};

export default route;
