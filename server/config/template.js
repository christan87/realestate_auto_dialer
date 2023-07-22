exports.demoEmail  = (firstName, lastName, address) => {
    const message = {
        subject: 'Did you know one of your neighbors is selling?',
        text: `Hello ${firstName? `${firstName} ${lastName}` : `${lastName}`}, did you know that your neighbor at ${address} is selling their home?\n\n` +
        `We would love the opportunity to speak more about this potential opportunity with you at length. You can either respond to this message or reach us at 1-800-123-4322.`
    }
    return message;
}