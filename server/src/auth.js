import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from './modules/user/UserModel';

export async function authenticate(plainPassword, encryptedPassword) {
  return bcrypt.compare(plainPassword, encryptedPassword);
}

export async function getUser(authorization) {
  if (!authorization) return null;
  try {
    const token = authorization.substring(7);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decodedToken.id);
    user.token = token;

    return user;
  } catch (error) {
    return null;
  }
}

export async function encryptPassword(password) {
  return bcrypt.hash(password, 10);
}

export function generateToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
}
