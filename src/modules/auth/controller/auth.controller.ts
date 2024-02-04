import { Request, Response } from 'express';
import AuthService from '../service/auth.service';

class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const token = await AuthService.authenticateUser(username, password);

      if (token) {
        res.status(200).json({ token });
      } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error during login');
    }
  }
}

export default new AuthController();
