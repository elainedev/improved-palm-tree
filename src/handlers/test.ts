'use strict';

export const TestHandler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is a test!'
    }),
  };

  callback(null, response);
};