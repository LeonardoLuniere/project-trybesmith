const validUserName = 'Hagar';
const validPassword = 'terrível';
const noPassword = {
    id: 1,
    username: validUserName,
    vocation: 'Guerreiro',
    level: 10,
    password: ''
  };
  const notExistingUser = {
    id: 1,
    username: 'notfound',
    vocation: 'Guerreiro',
    level: 10,
    password: validPassword,
  };
const wrongPassword = { userName: validUserName, password: 'wrong_password' };
const passwordDecode = '$2a$10$iMweZJq6S5CYuM8VABDbEOwZSzkYvxDq77cIjCIP4uBBo/kT1X3V.'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTY4NTY0Nzc4Mn0.0_xp9d-cPe-LotcN4R9Wxb7womYcE3MQzYAzlxLGoY0';
const noUserName = {
  id: 1,
  username: '',
  vocation: 'Guerreiro',
  level: 10,
  password: validPassword,
};

const validLogin = { email: validUserName, password: validPassword };

const existingUser = {
    dataValues: {
      id: 1,
      username: validUserName,
      vocation: 'Guerreiro',
      level: 10,
      password: validPassword,
    }
  };

export default {
  noPassword,
  noUserName,
  notExistingUser,
  token,
  passwordDecode,
  wrongPassword,
  existingUser,
  validLogin,
};