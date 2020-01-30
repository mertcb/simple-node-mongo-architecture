"use strict";
// module imports
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import http, { request } from "http";

// custom imports
import config from "../config";
import db from "./data/db";

//import routes
import home from "./routes/index";

// initialize express app
const app = express();
// crate an http server
const server = http.createServer(app);

// use helmet to add security headers and set x-powered-by to PHP
app.use(helmet.hidePoweredBy({ setTo: "PHP 4.2.0" }));
// use cors to enable CORS
app.use(cors());
// use morgan as a logger
app.use(morgan("dev"));
// use bodyparser to handle post requests
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
// set the server port
app.set("port", config.PORT || 3000);

// use the routes from the routes folder
app.use(home);
// error handlers

// not found error
app.use((req, res, next) => {
  const error = new Error("That endpoint doesn't exist. Route not found");
  error.status = 404;
  next(error);
});
// development error handler
// will print stacktrace
if (process.env.NODE_ENV !== "production") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

if (process.env.NODE_ENV !== "production") {
  // start the server in production
  server.listen(app.get("port"), config.HOST_NAME, () => {
    console.log(
      `Your Node app is running on ${config.HOST_NAME}:${config.PORT}`
    );
  });
} else {
  // start the server in production
  server.listen(app.get("port"), () => {
    console.log("Your Node app is running on port", app.get("port"));
  });
}

export default app;
