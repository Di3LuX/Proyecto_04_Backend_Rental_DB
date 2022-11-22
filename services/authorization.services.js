const models = require("../models/index");
const crypto = require("node:crypto");

// Comprobamos que el pass es correcto
const assertValidPasswordService = (pass) => {
  if (pass.length < 8) {
    throw new Error("La contraseña tiene que tener al menos 8 caracteres");
  }
  // Validamos que tiene al menos una minuscula
  if (!pass.match(/[a-z]/)) {
    throw new Error("Tu contraseña ha de contener al menos una minuscula");
  }
  // Validamos que tiene al menos una mayuscula
  if (!pass.match(/[A-Z]/)) {
    throw new Error("Tu contraseña ha de contener al menos una mayuscula");
  }
  // Validamos que tenga al menos un numero
  if (!pass.match(/[0-9]/)) {
    throw new Error("Tu contraseña ha de contener al menos un numero");
  }
};

// Nos aseguramos que el email es unico
const assertEmailIsUniqueService = async (email) => {
  // Validamos el email
  const existingMail = await models.articles.findAll({ email: email });
  if (existingMail) {
    throw new Error(
      "El Email que intentas introducir ya esta en el sistema"
    );
  }
};

// Nos aseguramos que el email es valido

const assertEmailIsValid = (email) => {
  // Validamos el email
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Devolvemos emailRegex.test(email);
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("Email invalido");
  }
};
// create User
const createUserService = async (userBody) => {
  const hash = encryptPassword(userBody.password);
  userBody.password = hash;
  await models.user.create({
    id_user: 24,
    email: userBody.email,
    name: userBody.name,
    surname: userBody.surname,
    password: userBody.password,
    document: userBody.document,
    address: userBody.address,
  });
  console.log(userBody);
  return userBody;
};

// Encriptamos el pass
const encryptPassword = (password) => {
  const hash = crypto
    .createHmac("sha512")
    .update(password)
    .digest("base64");
  return hash;
};

// Nos aseguramos que el email y el pass son validos
const isValidUserAndPassword = async (email, pass) => {
  const userFound = await models.user.findOne({ email: email });
  if (userFound) {
    const hash = encryptPassword(pass);
    return hash === userFound.password;
  }
  return false;
};

module.exports = {
  assertValidPasswordService,
  assertEmailIsUniqueService,
  assertEmailIsValid,
  createUserService,
  encryptPassword,
};
