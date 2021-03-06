const {
  QueryListOfUsers,
  QueryUserById,
  DeleteUserById,
} = require("../services/UserTable");

const GetAllUsers = (req, res) => {
  const userList = QueryListOfUsers();

  // DO SOMETHING WITH THE USER LIST OR JUST RETURN IT
  return res.json(userList);
};

const GetUser = (req, res) => {
  const userId = req.params.id;
  const user = QueryUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

const DeleteUser = (req, res) => {
  const userId = req.params.id;
  const user = DeleteUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

module.exports = {
  GetAllUsers,
  GetUser,
  DeleteUser,
};
