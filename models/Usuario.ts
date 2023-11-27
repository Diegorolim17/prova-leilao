// models/Usuario.ts
import { Prisma } from '@prisma/client';

export interface UsuarioCreateInput extends Prisma.UsuarioCreateInput {}
export interface UsuarioUpdateInput extends Prisma.UsuarioUpdateInput {}
export interface UsuarioWhereUniqueInput extends Prisma.UsuarioWhereUniqueInput {}

export interface Usuario extends Prisma.UsuarioModel {
  nome: string;
  email: string;
  leiloesCriados?: Leilao[];
  lancesDados?: Lance[];
}
