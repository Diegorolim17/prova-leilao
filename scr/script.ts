// script.ts
import prisma from './prisma';


const syncDatabase = async () => {
  try {
    await prisma.$connect();
    console.log('Conectado ao banco de dados');

    

  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    await prisma.$disconnect();
    console.log('Desconectado do banco de dados');
  }
};

// Executar a sincronização do banco de dados
syncDatabase();
