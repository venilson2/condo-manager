import {Router} from 'express'
import AuthController from '../modules/auth/controller/auth.controller';

const router = Router()

router.post('/login', AuthController.login);
router.get('/logged-in-user', AuthController.getLoggedInUser);

export default router;
