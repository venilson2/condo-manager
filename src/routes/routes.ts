import {Router} from 'express'
import tenantRoutes from './tenant.routes';
import authRoutes from './auth.routes';

const router = Router()

router.get('/', async (_, res) => {
	return res.status(200).send('Hello World!')
})

router.use('/tenants', tenantRoutes);
router.use('/auth', authRoutes);

export {router}