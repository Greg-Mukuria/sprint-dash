const Debug = require('debug');
const dotenv = require('dotenv');
const express = require('express');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const route = require('./routes');

// calling an instance of express
const app = express();

// logging all request to console using morgan
app.use(logger('dev'));

// middlewares - parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
