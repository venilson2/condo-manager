import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from '../repository/user.repository';
import { User } from '../model/user.model';

class UserService {
  async createUser(username: string, password: string, roles: string[]): Promise<User> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await UserRepository.createUser(username, hashedPassword, roles);

    return newUser;
  }

  async getAllUsers(): Promise<User[]> {
    return await UserRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<User | null> {
    return await UserRepository.getUserById(id);
  }

  async updateUser(id: string, username: string, password: string, roles: string[]): Promise<User | null> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return await UserRepository.updateUser(id, username, hashedPassword, roles);
  }

  async deleteUser(id: string): Promise<User | null> {
    return await UserRepository.deleteUser(id);
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return await UserRepository.getUserByUsername(username);
  }

  async getUserLogged(token: string): Promise<User | null> {
    try {
      const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET as string);
      return await UserRepository.getUserById(decodedToken.userId);
    } catch (error: any) {
      console.error('Error verifying token:', error.message);
      return null; 
    }
  }
}

export default new UserService();
