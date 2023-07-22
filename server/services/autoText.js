const template = require('../config/template');

exports.prepAutoText = (type, data) => {
    try {
        const message = prepareTemplate(type, data);
        console.log('server>services>autoText.js>message: ', message)
        return message;
    } catch (error) {
        console.log('server>services>autoText.js>error: ', error);
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