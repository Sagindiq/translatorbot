import { DataTypes } from "sequelize";
import sequelize from "../utils/sequelize";

const userModel = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    },
    displayLanguage: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'uz'
    },
    toTranslate: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

export default userModel;