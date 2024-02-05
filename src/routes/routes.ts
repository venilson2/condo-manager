import {Router} from 'express'
import tenantRoutes from './tenant.routes';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import { authenticateToken } from '../modules/auth/middleware/auth.middleware';


const router = Router()

router.get('/', async (_, res) => {
	return res.status(200).send('Hello World!')
})

router.use('/tenants', authenticateToken, tenantRoutes);
router.use('/users', authenticateToken, userRoutes);
router.use('/auth', authRoutes);

export {router}