require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const setupDB = async () => {
    try {
        mongoose.set('useCreateIndex', true);
        mongoose.connect(database.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }).then(() => {
            console.log(`${chalk.green('✓')} ${chalk.blue('Connected to MongoDB!')}`)
        }).catch(err => {
            console.log(`${chalk.red('x')} ${chalk.red('NOT Connected to MongoDB! server/utils/db')}`)
            console.log(err)
            setupDB(); // Solves connection issues [for shotty networl (work)] (Probably not the best sollution)
        });
    } catch (error) {
        return null;
    }
};

module.exports = setupDB;