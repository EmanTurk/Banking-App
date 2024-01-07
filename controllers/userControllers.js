import statusCode from "../constants/statusCode";
import '../db/mongoose.js';
import statusCode from "../constants/statusCode.js";

export const createUser = async (req, res, next) => {
  //  logic for createUser
  res.status(statusCode.CREATED).send(newUser);
};

export const getUserById = async (req, res, next) => {
  //  logic for getUserById
  res.status(statusCode.Ok).send(user);
};

// ... other functions ...

export const deleteUser = async (req, res, next) => {
  //  logic for deleteUser
  res.status(statusCode.Ok).send(`user with id: ${req.params.id} has been removed.`);
};