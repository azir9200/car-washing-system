import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

//parsers
app.use(express.json());

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://car-wash-client-five.vercel.app',
    ],
    credentials: true,
  }),
);
// app.use(
//   cors({
//     origin: 'https://car-wash-client-five.vercel.app',
//     credentials: true,
//   }),
// );

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our world !');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
