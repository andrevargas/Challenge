import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from './modules/user/UserModel';

// #TODO: you know what to do
const JWT_SECRET = 'potato';

export async function authenticate(plainPassword, encryptedPassword) {
  return bcrypt.compare(plainPassword, encryptedPassword);
}

export async function getUser(authorization) {
  if (!authorization) return null;
  try {
    const tokenInfo = jwt.verify(authorization.substring(7), JWT_SECRET);
    const user = await UserModel.findById(tokenInfo.id);
    return user;
  } catch (error) {
    return null;
  }
}

export async function encryptPassword(password) {
  return bcrypt.hash(password, 10);
}

export function generateToken(user) {
  return jwt.sign({ id: user._id }, JWT_SECRET);
}
