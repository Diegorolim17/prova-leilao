// models/Lance.ts
import { Prisma } from '@prisma/client';
import { Usuario } from './Usuario';
import { Leilao } from './Leilao';

export interface LanceCreateInput extends Prisma.LanceCreateInput {}
export interface LanceUpdateInput extends Prisma.LanceUpdateInput {}
export interface LanceWhereUniqueInput extends Prisma.LanceWhereUniqueInput {}

export interface Lance extends Prisma.LanceModel {
  comprador: Usuario;
  leilao: Leilao;
  valor: number;
}
