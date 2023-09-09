# Conexion a base de datos y modelos

## La estructura de carpetas que usaremos para tener nuestro proyecto organizado

- src
    - app.js
    - utils
        - database.js
    - models
        - users.model.js
- .gitignore
- .env

# VARIABLES DE ENTORNO

instalar dotenv

npm i dotenv

En la raiz del proyecto creamos un archivo .env

En .gitignore agregamos este archivo : 
    - node_modules
    - .env

En el archivo .env agregamos las variables de entorno para la conexion a la base de datos