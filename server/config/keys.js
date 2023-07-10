module.exports = {
    app: {
        name: 'Auto Dialer',
        apiURL: process.env.BASE_API_URL,
        serverURL: process.env.BASE_SERVER_URL,
        clientURL: process.env.BASE_CLIENT_URL
    },
    port: process.env.PORT || 3000,
    database: {
        url: process.env.MONGO_URI
    },
    twilioKeys: {
        twilioAccountSid: process.env.TWILIO_SID,
        twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
        twilioNumber: process.env.TWILIO_PHONE_NUMBER,
        twilioApiKey: process.env.TWILIO_API_SID,
        twilioApiSecret: process.env.TWILIO_API_SECRET,
        localTunnel: process.env.LOCAL_TUNNEL
    }
}