## Instrucciones

 1. Clonar repositorio
 2. En PostgreSQL ir al database manager y crear una nueva base de datos llamada 'currencies' que es la que se va a usar para guardar los registros.
 3. En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgreSQL
DB_HOST=localhost
PORT=3001
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgreSQL.
La variable PORT es el numero de puerto que tengas.

### _Instalar los paquetes necesarios para correrlo_

- Abrir la consola del proyecto
    + Dentro de la carpeta 'api', correr la línea de comandos y escribir 'npm install'
    + Dentro de la carpeta 'client', correr la línea de comandos y escribir 'npm install'

### _Correr el proyecto_

- Abrir la consola del proyecto
    + Dentro de la carpeta 'api', correr la línea de comandos y escribir 'npm start'     
    + Dentro de la carpeta 'client', correr la línea de comandos y escribir 'npm start' (va directamente a http://localhost:3000/)  

#### Tecnologías necesarias:
- [ ] Node
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Nota: los elementos son pocos y tardan unos segundos en mostrarse por consumir el endpoint por cada moneda  