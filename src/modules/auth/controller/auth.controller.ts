import { Request, Response } from 'express';
import AuthService from '../service/auth.service';

class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const token = await AuthService.authenticateUser(username, password);

      if (token) {
        res.status(200).json({ username, token });
      } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error during login');
    }
  }

  async getLoggedInUser(req: Request, res: Response): Promise<void> {
    try {
      const token = req.header('Authorization')?.split(' ')[1];

      if (!token) {
        res.status(401).send('Unauthorized');
        return;
      }

      const loggedInUser = await AuthService.getLoggedInUser(token);

      if (loggedInUser) {
        res.status(200).json(loggedInUser);
      } else {
        res.status(401).send('Unauthorized - Invalid or expired token');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting the logged-in user.');
    }
  }
}

export default new AuthController();
