import { UserModel } from './UserModel';
import { encryptPassword, generateToken, authenticate } from '../../auth';
import { prepare } from '../resolvers';

export async function signIn(root, { input: { email, password } }) {
  const user = await UserModel.findOne({ email });
  const authSuccess = await authenticate(password, user.password);

  if (!authSuccess) {
    throw new Error('E-mail or password invalid.');
  }

  user.token = generateToken(user);
  return prepare(user);
}

export async function signUp(root, { input: { name, email, password } }) {
  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    throw new Error('This e-mail is already used!');
  }

  const user = await UserModel.create({
    name,
    email,
    password: await encryptPassword(password),
  });

  user.token = generateToken(user);
  return prepare(user);
}
