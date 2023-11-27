// routes/UsuarioRoutes.ts
import express from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = express.Router();

router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

export default router;