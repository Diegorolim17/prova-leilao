// services/UsuarioService.ts
import prisma from '../prisma';
import { UsuarioCreateInput, UsuarioUpdateInput, UsuarioWhereUniqueInput } from '../models/Usuario';

const UsuarioService = {
  getAll: async () => {
    return prisma.usuario.findMany();
  },

  getById: async (id: number) => {
    return prisma.usuario.findUnique({
      where: { id },
      include: {
        leiloesCriados: true,
        lancesDados: true,
      },
    });
  },

  create: async (data: UsuarioCreateInput) => {
    return prisma.usuario.create({ data });
  },

  update: async (id: number, data: UsuarioUpdateInput) => {
    return prisma.usuario.update({
      where: { id },
      data,
    });
  },

  delete: async (id: number) => {
    return prisma.usuario.delete({
      where: { id },
    });
  },
};

export default UsuarioService;
