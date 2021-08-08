import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// NÃO EXISTE EM SISTEMA NORMAL
router.get('/', userController.index);
router.get('/:id', userController.show);

// router.put('/:id', loginRequired, userController.update);
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
