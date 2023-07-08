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
    }
}