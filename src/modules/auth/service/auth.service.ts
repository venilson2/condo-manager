import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from '../../user/service/user.service';

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
}

export default new AuthService();
