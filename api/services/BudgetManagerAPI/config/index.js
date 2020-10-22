const db = process.env.MONGO_URL

module.exports = {
    secret: 'budgetsecret',
    session: { session: false },
    database: db
}