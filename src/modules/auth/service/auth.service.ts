import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from '../../user/service/user.service';
import UserRepository from '../../user/repository/user.repository';
import { User } from '../../user/model/user.model';

class AuthService {
  async authenticateUser(username: string, password: string): Promise<string | null> {
    const user = await UserService.getUserByUsername(username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return null; 
    }

    return jwt.sign(
      { userId: user._id, username: user.username, roles: user.roles },
      process.env.JWT_SECRET as string
    );
  }

  async getLoggedInUser(token: string): Promise<User | null> {
    try {
      const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET as string);
      return await UserRepository.getUserById(decodedToken.userId);
    } catch (error: any) {
      console.error('Error verifying token:', error.message);
      return null; 
    }
  }
}

export default new AuthService();
