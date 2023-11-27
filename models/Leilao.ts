// models/Leilao.ts
import { Prisma } from '@prisma/client';
import { Usuario } from './Usuario';

export interface LeilaoCreateInput extends Prisma.LeilaoCreateInput {}
export interface LeilaoUpdateInput extends Prisma.LeilaoUpdateInput {}
export interface LeilaoWhereUniqueInput extends Prisma.LeilaoWhereUniqueInput {}

export interface Leilao extends Prisma.LeilaoModel {
  produto: string;
  preco: number;
  dataLimite: Date;
  dono: Usuario;
  listaDeLances: string;
  lances?: Lance[];
}
