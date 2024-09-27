import mariadb from 'mariadb';
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

// Criação do pool de conexões
async function DoteEnv() {
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_PASS:', process.env.DB_PASS);
    console.log('DB_NAME:', process.env.DB_NAME);
}

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, // Adicione a senha se necessário
  database: process.env.DB_NAME, // Nome do banco de dados
  connectionLimit: 5
});

async function executeQuery(query,params) {
  let conn;
  try {
    // Obtém a conexão
    conn = await pool.getConnection();

    // Faz uma inserção
    const res = await conn.query(query,params);
    // console.log(res); 
    return res

  } catch (err) {
    console.error("Erro:", err);
  } finally {
    // Libera a conexão para o pool
    if (conn) conn.release();
  }
}

// // Chame a função
// asyncFunction();


export default {DoteEnv,executeQuery}