import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

const app = express();

// GET request to the root confirms the API is online
app.get('/', (req, res) => {
  res.send(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});

//Bind and listen for connections on the specified port.
app.listen(process.env.PORT, () => {
  console.log(
    `Express server listening at http://localhost:${process.env.PORT}`.yellow
      .bold
  );
});
