import UserModel, { User } from '../model/user.model';

class UserRepository {
  async createUser(username: string, password: string, roles: string[]): Promise<User> {
    const newUser = new UserModel({ username, password, roles });
    return await newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return await UserModel.find();
  }

  async getUserById(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }

  async updateUser(id: string, username: string, password: string, roles: string[]): Promise<User | null> {
    return await UserModel.findByIdAndUpdate(id, { username, password, roles }, { new: true });
  }

  async deleteUser(id: string): Promise<User | null> {
    return await UserModel.findByIdAndDelete(id);
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return await UserModel.findOne({ username });
  }
}

export default new UserRepository();
