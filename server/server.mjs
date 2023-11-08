import Debug from 'debug';
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import route from './routes/index.mjs'; // Updated import, removing Swagger UI

// calling an instance of express
const app = express();

// logging all requests to the console using morgan
app.use(logger('dev'));

// middlewares - parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  response.status(200).send('The API is working');
});

route(app);

dotenv.config();

const debug = Debug('http');
const { PORT = 5000 } = process.env; // setup PORT to be used

app.listen(PORT, () => {
  debug(`Server is running on PORT ${PORT}`);
});

export default app;
