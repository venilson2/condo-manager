import UserRepository from '../repository/user.repository';
import { User } from '../model/user.model';

class UserService {
  async createUser(username: string, password: string, roles: string[]): Promise<User> {
    const newUser = await UserRepository.createUser(username, password, roles);

    return newUser;
  }

  async getAllUsers(): Promise<User[]> {
    return await UserRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<User | null> {
    return await UserRepository.getUserById(id);
  }

  async updateUser(id: string, username: string, password: string, roles: string[]): Promise<User | null> {
    return await UserRepository.updateUser(id, username, password, roles);
  }

  async deleteUser(id: string): Promise<User | null> {
    return await UserRepository.deleteUser(id);
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return await UserRepository.getUserByUsername(username);
  }
}

export default new UserService();
