import { Sequelize } from "sequelize"
import { POSTGRESQL_DATABASE, POSTGRESQL_HOST, POSTGRESQL_PASSWORD, POSTGRESQL_USERNAME } from "../config"

const sequelize = new Sequelize({
    host: POSTGRESQL_HOST,
    port: 5432,
    username: POSTGRESQL_USERNAME,
    password: POSTGRESQL_PASSWORD,
    database: POSTGRESQL_DATABASE,
    dialect: 'postgres',
    timezone: '+05:00',
})

export default sequelize