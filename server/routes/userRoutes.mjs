import dotenv from 'dotenv';
import userController from '../controllers/userController.mjs';
import authenticate from '../middleware/authentications.mjs';
import { adminRole } from '../middleware/permissions.mjs';
import {
  validateSignup, validateSignin, validateNewAdmin, validateEmail,
} from '../middleware/validations.mjs';

dotenv.config();

const API_VERSION = '/api/v1';

const userRoute = (app) => {
  app.post(`${API_VERSION}/auth/signup`, validateSignup, userController.signup);
  app.post(`${API_VERSION}/auth/signin`, validateSignin, userController.signin);
  app.get(`${API_VERSION}/user/:userEmail/accounts`, authenticate, validateEmail, userController.checkAccounts);
  app.post(`${API_VERSION}/user/admin`, authenticate, adminRole, validateNewAdmin, userController.signup);
};

export default userRoute;
