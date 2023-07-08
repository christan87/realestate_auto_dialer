require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');

const keys = require('./config/keys'); 
// const routes = require('./routes');
const socket = require('./socket');
const setupDB = require('./utils/db');

const { port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    helmet({
        contentSecurityPolicy: false, //disabled to allow content from wider range
        frameguard: true // helps prevent 'clickjacking'
    })
);

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));

setupDB();
//require('./config/passport')(app);
//app.use(routes);

// for demo only!
app.get('/', (req, res) => {
    res.send('Hello World!');
});

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
//create an if conditional here for if the NODE_ENV=production

const server = app.listen(port, () => {
    console.log(
      `${chalk.green('✓')} ${chalk.blue(
        `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
      )}`   
    );
});

socket(server);
