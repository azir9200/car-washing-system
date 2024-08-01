import { ErrorRequestHandler } from 'express';
import config from '../config';
import { TErrorSources } from '../interface/error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err.statusCode);
  //setting default values
  let statusCode = 500;
  let message = 'What is went wrong!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'azir, Something went wrong',
    },
  ];

  //ultimate return
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
