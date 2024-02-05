import { Request, Response } from 'express';
import UserService from '../service/user.service';

class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { username, password, roles } = req.body;
      const newUser = await UserService.createUser(username, password, roles);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating the User.');
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting the list of Users.');
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send('User not found.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting the User.');
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { username, password, roles } = req.body;
      const updatedUser = await UserService.updateUser(id, username, password, roles);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).send('User not found.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating the User.');
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedUser = await UserService.deleteUser(id);
      if (deletedUser) {
        res.status(200).json(deletedUser);
      } else {
        res.status(404).send('User not found.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting the User.');
    }
  }

  async getUserLogged(req: Request, res: Response): Promise<void> {
    try {
      const token = req.header('Authorization')?.split(' ')[1];

      if (!token) {
        res.status(401).send('Unauthorized');
        return;
      }

      const loggedInUser = await UserService.getUserLogged(token);

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

export default new UserController();
