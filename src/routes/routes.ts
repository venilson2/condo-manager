import {Router} from 'express'
import tenantRoutes from './tenant.routes';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import { authenticateToken } from '../modules/auth/middleware/auth.middleware';
import UserController from '../modules/user/controller/user.controller';
import { checkRoles } from '../modules/auth/middleware/checkRoles.middleware';

const router = Router()

router.use('/tenants', authenticateToken, tenantRoutes);
router.use('/users', authenticateToken, checkRoles(['admin']),  userRoutes);
router.use('/auth', authRoutes);



router.get('/my-info', UserController.getUserLogged);

export {router}