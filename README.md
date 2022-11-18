# Proyecto_04_Backend_Rental_DB
# Express API Sequelize + Mysql + JWT

## LISTA DE COMANDOS BASICOS:

npm i

npm run dev

npm run start

sequelize model:generate --name user --attributes name:string, password:string, email:string

sequelize db:create

sequelize db:migrate

sequelize db:migrate:undo

sequelize seed:generate --name demo-user

sequelize db:seed:all


## ENDPOINTS CREADOS:


#### Register
POST - localhost:3000/api/signup - { "name": "root", "email": "root@email.com",  "password": "password" }

#### Login
POST - localhost:3000/api/signin - { "email": "root@email.com",  "password": "password" }

#### Home
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
GET - localhost:3000/show
GET - localhost:3000/show/:id
GET - localhost:3000/show/name/:title
POST - localhost:3000/show
PUT - localhost:3000/show:id
DELETE - localhost:3000/show
DELETE - localhost:3000/show:id

#### Genre
GET - localhost:3000/genres
GET - localhost:3000/genres/:id
GET - localhost:3000/genres/name/:title
POST - localhost:3000/genres
PUT - localhost:3000/genres:id
DELETE - localhost:3000/genres
DELETE - localhost:3000/genres:id

