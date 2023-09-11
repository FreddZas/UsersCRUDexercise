import { Sequelize } from "sequelize";
import "dotenv/config"

const db = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    // La siguiente ruta nos permite trabajar en SSL
    // Si deseamos desplegar nuestra ruta en VISUAL STUDIO CODE, TENEMOS QUE COMENTARLA:
    //dialectOptions: {ssl: {required: true, rejectUnauthorized: false}},
});

export default db;
