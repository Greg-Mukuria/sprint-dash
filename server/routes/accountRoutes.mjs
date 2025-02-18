import dotenv from 'dotenv';
import accountController from '../controllers/accountController.mjs';
import authenticate from '../middleware/authentications.mjs';
import { adminStaffRole } from '../middleware/permissions.mjs';
import { validateCreate, validateStatusChange, validateAccountNumber } from '../middleware/validations.mjs';

dotenv.config();

const API_VERSION = '/api/v1';

const accountRoute = (app) => {
  app.post(`${API_VERSION}/accounts`, authenticate, validateCreate, accountController.createAccount);
  app.patch(`${API_VERSION}/account/:accountNumber`, authenticate, adminStaffRole, validateStatusChange, accountController.changeAccountStatus);
  app.delete(`${API_VERSION}/accounts/:accountNumber`, authenticate, adminStaffRole, validateAccountNumber, accountController.deleteAccount);
  app.get(`${API_VERSION}/accounts/:accountNumber/transactions`, authenticate, validateAccountNumber, accountController.accountTransactions);
  app.get(`${API_VERSION}/accounts/:accountNumber`, authenticate, validateAccountNumber, accountController.checkAccountNumber);
  app.get(`${API_VERSION}/accounts`, authenticate, adminStaffRole, accountController.checkAccounts);
};

export default accountRoute;
