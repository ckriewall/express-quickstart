# Express Server Quickstart

## Background

Front-end developers often want to display dynamic data from multiple sources. To do so they can:

1. Consume data from an existing API like:

- [IMDB](https://developer.imdb.com)
- [Spotify](https://developer.spotify.com/documentation/web-api)
- [Twitter](https://developer.twitter.com/en/docs/twitter-api)

or

2. Build their own API

The purpose of this project is to demonstrate how to build a simple API for JS projects with Express. We expand slightly on the [Hello World project](https://expressjs.com/en/starter/hello-world.html) from the Express docs.

## About ExpressJS

Express is a server-side or back-end framework. It is used in combination with frontend frameworks like react to build full stack applications.

## Requirements

Basic knowledge of JS, node, and npm.

## Build an Express Server from scratch

You can, of course, download the finished repo. However, building the Express server from scratch is much more fun :)

### Initial Setup

1. Open [VSCode](https://code.visualstudio.com).
1. Create a new directory called `express-quickstart`.
1. Navigate into the `express-quickstart` directory.
1. Run `npm init` to create a `package.json` file in your project root.

### Add Support for ES `import`

By default, a project initialized with NPM supports [imports modules using CommonJS](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules). We want to use the modern [ES import syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

In `package.json`, add `"type": "module",` as shown below:

```javascript
{
  "name": "express-quickstart",
  "version": "1.0.0",
  "description": "speedy-quick express server startup",
  "main": "server.js",
  "type": "module",
```

### Install Dependencies

We will use very few NPM packages to complete this project. They are:

- [express]
- [dotenv]
- [colors]

Install the dependencies with the command `npm i express dotenv colors`

### Define Environment Variables

Rather than hard-code common values, we can store those values in environment variables. the dotenv package makes this easy.

1. In the project root, create a file called `.env`.
1. Add the following lines inside `.env`.

```json
NODE_ENV=DEVELOPMENT
PORT=5000
```

### Configure Express

1. In the project root, create a file called `server.js` and add the following content:

```javascript
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

// import environment variables from the .env file
dotenv.config();

// create the Express application
const app = express();

// GET request to the root confirms the API is online
app.get('/', (req, res) => {
  res.send(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});

// bind and listen for connections on the specified port
app.listen(process.env.PORT, () => {
  console.log(
    `Express server listening at http://localhost:${process.env.PORT}`.yellow
      .bold
  );
});
```

### Start and test the Express Server

1. Run `node server.js` to start Express.
1. Browse to http://localhost:5000 to confirm the server is running.

You built an Express server that responds to HTTP requests. Well done!