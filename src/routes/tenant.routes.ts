import {Router} from 'express'
import TenantController from '../modules/tenant/controller/tenant.controller';

const router = Router()

router.get('/', TenantController.getAllTenants);
router.get('/:id', TenantController.getTenantById);
router.post('/', TenantController.createTenant);
router.put('/:id', TenantController.updateTenant);
router.delete('/:id', TenantController.deleteTenant);

export default router;
