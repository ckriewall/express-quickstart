import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

// read .env and parse its contents
dotenv.config();

// create the Express application
const app = express();

// GET request to the root confirms the API is online
app.get('/', (req, res) => {
  res.send(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});

// GET request to /simpsons returns an array of Simpsons family members
app.get('/simpsons', (req, res) => {
  res.send([
    { first: 'Homer', last: 'Simpson' },
    { first: 'Marge', last: 'Simpson' },
    { first: 'Lisa', last: 'Simpson' },
    { first: 'Bart', last: 'Simpson' },
    { first: 'Maggie', last: 'Simpson' },
  ]);
});

// bind and listen for connections on the specified port
app.listen(process.env.PORT, () => {
  console.log(
    `Express server listening at http://localhost:${process.env.PORT}`.yellow
      .bold
  );
});
