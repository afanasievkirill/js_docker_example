module.exports = {
    secret: 'budgetsecret',
    session: { session: false },
    database: process.env.MONGO_URL,
    port: process.env.PORT
}