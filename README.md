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
POST - localhost:3000/api/signup - { "name": "root", "email": "root@email.com",  "password": "password" }

#### Login:
POST - localhost:3000/api/signin - { "email": "root@email.com",  "password": "password" }

#### Home:
GET - localhost:3000

#### Peliculas

GET - localhost:3000/movies

GET - localhost:3000/movies/:id

GET - localhost:3000/movies/name/:title

POST - localhost:3000/movies

PUT - localhost:3000/movies:id

DELETE - localhost:3000/movies

DELETE - localhost:3000/movies:id


#### Series

GET - localhost:3000/shows

GET - localhost:3000/shows/:id

GET - localhost:3000/shows/name/:title

POST - localhost:3000/shows

PUT - localhost:3000/shows:id

DELETE - localhost:3000/shows

DELETE - localhost:3000/shows:id


#### Genero

GET - localhost:3000/genres

GET - localhost:3000/genres/:id

GET - localhost:3000/genres/name/:title

POST - localhost:3000/genres

PUT - localhost:3000/genres:id

DELETE - localhost:3000/genres

DELETE - localhost:3000/genres:id


#### Usuarios

GET - localhost:3000/users

GET - localhost:3000/users/:id

GET - localhost:3000/users/name/:title

POST - localhost:3000/users

PUT - localhost:3000/users:id

DELETE - localhost:3000/users

DELETE - localhost:3000/users:id


-------------------------------------------------------------------------------------------------------

Agradezco a Jose Marín y a David Ochando por la ayuda y los repositorios de información donados para este proyecto.
