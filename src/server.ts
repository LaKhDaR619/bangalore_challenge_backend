import express from 'express';
import connectDB from './config/dbConfig';
import errorHandler from './middlewares/errorHandler';

import dotenv from 'dotenv';
import initRoutes from './init/init.routes';
dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();

app.get('/', (req, res) => res.json('hello'));

const setUp = async () => {
  try {
    console.log('connecting to Database...');
    const connection = await connectDB();
    console.log(`Connected To Database ${process.env.DB_NAME}`);

    // running any pending migartions
    await connection.runMigrations();
  } catch (err) {
    console.error('Error Connecting To Database', err);
  }

  app.use(express.json());

  initRoutes(app);
  app.use(errorHandler);

  process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
  });

  app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
};

setUp();
