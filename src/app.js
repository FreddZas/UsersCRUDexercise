import express from "express";
import cors from "cors"
import db from "./utils/database.js"
import User from "./models/users.model.js"
import "dotenv/config"

User;

console.log(process);

const PORT = process.env.PORT ?? 8000;

// Probar conexion con la base de datos
db.authenticate()
    .then(() => {
        console.log("Conexion correcta");
    })
    .catch((error) => console.log(error));

db.sync() // Si no existe la tabla, la crea, si ya existe, hace nada.
    .then(() => console.log("Base de datos sincronizada"))
    .catch (error => console.log (error));

const app = express();

// Es importante utilizar el express.json para (middleware)
app.use(express.json());
app.use(cors());

// Healthy check
app.get("/", (req, res) => {
    res.send('OK');
});

// CREATE user
// Cuando se haga una request a /users POST crear un usuario

app.post("/users", async (req, res) => {
    try {
        const { body } = req;
        // Mandar la info a la base de datos
        // * INSERT INTO users (username, email, password)
        const user = await User.create(body);
        res.status(201).json(user);
    } catch(error){
        res.status(400).json(error)
    }
});

// READ users
// GET /users -> devolver un json con todos los usuarios en la base de datos.
app.get('/users', async (req , res) => {
    try{
        const users = await User.findAll();
        res.json(users);
    } catch(error){
        res.status(400).json(error)
    }
});

// SELECT * FROM users WHERE id=4;
// GET /users/:id
// ? como mandamos el id en este get
// path params

app.get('/users/:id', async(req, res) => {
    try {
        const {id} = req.params; // params es un objeto {id: 4}
        const user = await User.findByPk(id);
        res.json(user);
    } catch(error){
        res.status(400).json(error);
    }
});

// UPDATE ..... WHERE id = 5;
// PUT '/users' -> path params
// la informacion a actualizar por el body
app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        // Primer objeto  es la INFO
        // Segundo objeto es el WHERE
        const user = await User.update(body, {
            where: {id} // -> { id: id }
        });
        res.json(user);
    } catch(error) {
        res.status(400).json(error);
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;

        await User.destroy({
            where: {id}
        });
        res.status(204).end() // termina con la peticion
    } catch (error) {
        res.status(400).json(error);
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})