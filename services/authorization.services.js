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

// Nos aseguramos que el mail es unico
const assertEmailIsUniqueService = async (mail) => {
  // Validamos el mail
  const existingMail = await models.articles.findAll({ mail: mail });
  if (existingMail) {
    throw new Error(
      "El Email que intentas introducir ya esta en el sistema"
    );
  }
};

// Nos aseguramos que el mail es valido

const assertEmailIsValid = (mail) => {
  // Validamos el mail
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Devolvemos emailRegex.test(mail);
  const isValid = mail.match(emailRegex);
  if (!isValid) {
    throw new Error("Email invalido");
  }
};
// create User
const createUserService = async (userBody) => {
  const hash = encryptPassword(userBody.password);
  userBody.password = hash;
  await models.user.create({
    name: userBody.name,
    username: userBody.username,
    age: userBody.age,
    mail: userBody.mail,
    pass: userBody.pass,
  });
  console.log(userBody);
  return userBody;
};

// Encriptamos el pass
const encryptPassword = (pass) => {
  const hash = crypto
    .createHmac("sha512")
    .update(pass)
    .digest("base64");
  return hash;
};

// Nos aseguramos que el mail y el pass son validos
const validUserPass = async (mail, pass) => {
  const userFound = await models.user.findOne({ mail: mail });
  if (userFound) {
    const hash = encryptPassword(pass);
    return hash === userFound.pass;
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
