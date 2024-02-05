import { Request, Response, NextFunction } from 'express';

export const checkRoles = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRoles = req.user.roles;

    if (userRoles && allowedRoles.some(role => userRoles.includes(role))) {
      next();
    } else {
      res.status(403).send('Forbidden - Insufficient roles');
    }
  };
};
