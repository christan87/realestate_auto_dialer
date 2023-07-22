const sgMail = require('@sendgrid/mail');

const template = require('../config/template');
const keys = require('../config/keys');
const { sendGridApiKey } = keys.sendGridKeys;


sgMail.setApiKey(sendGridApiKey);

exports.sendMail = async (type, email, sender, data) => {
    try {
        const message = prepareTemplate(type, data);
        const config = {
            to: email,
            from: sender,
            subject: message.subject,
            text: message.text,
        }
        console.log('==============>server>services>sendgrid.js>Config: ', config)
        return await sgMail.send(config).then(() => {
          console.log('Email sent successfully');
        })
        .catch((error) => {
          console.error('server>services>sendgrid.js> Error sending email:', error);
        });
    } catch (error) {
        console.log('server>services>sendgrid.js>error: ', error);
        return error;
    }
}

const prepareTemplate = (type, data) => {
    let message;

    switch (type) {
        case 'demo':
            message = template.demoEmail(data.firstName, data.lastName, data.address);
            break;
        default:
            message = '';
    }

    return message;
}