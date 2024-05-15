const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const Joi = require('joi');
app.use(express.json());
const mainRouter = require('./routers/routers')
app.use(cors());
app.use(cookieParser());
mainRouter(app)

const port = 5000;
app.listen(port, () => console.log("Server running on port " + port));
