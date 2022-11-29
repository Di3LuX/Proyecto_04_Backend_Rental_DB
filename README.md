# Proyecto_04_Backend_Rental_DB
# Express API Sequelize + Mysql + JWT

Crearemos el backend de una aplicacion de alquiler de peliculas y series.

Utilizaremos las tecnologias de Node con Express junto con Sequelize.
Descargaremos los paquetes de:

  axios
  
  bcrypt
  
  colors
  
  cors
  
  dotenv
  
  express
  
  jsonwebtoken
  
  morgan
  
  mysql2
  
  nodemon
  
  sequelize y sequelize-cli
  
  winston
 
-------------------------------------------------------------------------------------------------------
## LISTA DE COMANDOS BASICOS


#### INSTALAMOS TODAS LAS DEPENDENCIAS CON EL GESTOR DE PAQUETES (Node Package Manager)
npm i

#### LANZAMOS EL SCRIP DEV DESDE EL PACKAGE.JSON
npm run dev

#### CREAMOS LA BASE DE DATOS

sequelize db:create

![Sin título](https://user-images.githubusercontent.com/109986640/202918812-132861b1-bdf5-4c23-8d3b-d8bff6ebc34e.png)

#### MIGRAMOS LAS TABLAS A NUESTRA BASE DE DATOS

sequelize db:migrate

![Sin título1](https://user-images.githubusercontent.com/109986640/202918827-728ae7f1-0cb6-43f0-8173-4c73e4570871.png)

#### DESHACEMOS LA MIGRACION
sequelize db:migrate:undo

#### GENERAMOS LOS DATOS QUE IRAN DENTRO DE LAS TABLAS DE NUESTRA DB
sequelize db:seed:all

#### USUARIOS 
![Sin título4](https://user-images.githubusercontent.com/109986640/202918850-720fbc66-e7da-4ee8-b6c9-def022875df2.png)

#### GENEROS 
![Sin título2](https://user-images.githubusercontent.com/109986640/202918840-52244494-1754-4feb-a2ec-140cf436bb33.png)

#### PELIS 
![Sin título3](https://user-images.githubusercontent.com/109986640/202918889-b6bab092-c0f7-498d-bf81-b9800a039224.png)


-------------------------------------------------------------------------------------------------------

## ENDPOINTS CREADOS 


#### Register:
POST - localhost:3000/user/register - {
  "name": "prueba",
  "username": "laprueba",
  "age": "1",
  "mail": "elmail@mail.es",
  "pass": "aA111111"
}
#### Login:
POST - localhost:3000/user/login - {
  "mail": "elmail@mail.es",
  "pass": "aA111111"
}

#### Peliculas

GET - localhost:3000/movies

GET - localhost:3000/movies/id/"id"

GET - localhost:3000/movies/title/"title"

POST - localhost:3000/movies - {
        "title": titulo,
        "rate": valoracion,
        "synopsis": detalles,
        "adult": para todos los publicos (t/f),
        "genres": genero
      }

DELETE - localhost:3000/movies

DELETE - localhost:3000/movies:id

#### Series

GET - localhost:3000/shows

GET - localhost:3000/shows/id/"id"

GET - localhost:3000/shows/title/"title"

POST - localhost:3000/shows - {
        "title": titulo,
        "rate": valoracion,
        "synopsis": detalles,
        "adult": para todos los publicos (t/f),
        "genres": genero
      }

PUT - localhost:3000/shows:id

DELETE - localhost:3000/shows

DELETE - localhost:3000/shows:id

-------------------------------------------------------------------------------------------------------

Agradezco a Jose Marín y a Dani Tarazona por la ayuda y los repositorios de información donados para este proyecto.
