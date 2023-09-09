import { DataTypes } from "sequelize";
import db from "../utils/database.js"

const User = db.define("users", {
    // definir todos los atributos de la tabla
    id: {
        // tipo de dato
        type: DataTypes.INTEGER,
        // llave primaria
        primaryKey: true,
        // autoIncrementable
        autoIncrement:true,
    },
    // username varchar(30) [not null]
    username:{
        type :DataTypes.STRING(30) ,
        allowNull: false,
    },
    // email varchar(50) [not null, unique]
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default User;