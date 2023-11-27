// controllers/UsuarioController.ts
import { Request, Response } from 'express';
import UsuarioService from '../services/UsuarioService';

const UsuarioController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const usuarios = await UsuarioService.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const usuario = await UsuarioService.getById(Number(id));
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário por ID.' });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const novoUsuario = await UsuarioService.create(body);
      res.json(novoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const usuarioAtualizado = await UsuarioService.update(Number(id), body);
      res.json(usuarioAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await UsuarioService.delete(Number(id));
      res.json({ message: 'Usuário excluído com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir usuário.' });
    }
  },
};

export default UsuarioController;
