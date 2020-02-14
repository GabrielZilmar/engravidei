module.exports = {
    dialect: 'mysql',
    host: process.env.HOST,
    username:process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
    },
};