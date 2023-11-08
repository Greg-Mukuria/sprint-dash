import dotenv from 'dotenv';
import transactionController from '../controllers/transactionController.mjs';
import authenticate from '../middleware/authentications.mjs';
import { staffRole } from '../middleware/permissions.mjs';
import { validateAmount, validateTransaction } from '../middleware/validations.mjs';

dotenv.config();

const API_VERSION = '/api/v1';

const transactionRoute = (app) => {
  app.post(`${API_VERSION}/transactions/:accountNumber/credit`, authenticate, staffRole, validateAmount, transactionController.creditAccount);
  app.post(`${API_VERSION}/transactions/:accountNumber/debit`, authenticate, staffRole, validateAmount, transactionController.debitAccount);
  app.get(`${API_VERSION}/transactions/:transactionId`, authenticate, validateTransaction, transactionController.checkTransaction);
};

export default transactionRoute;
