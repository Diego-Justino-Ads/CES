const { Client } = require('pg');

// Configurações de conexão com o banco de dados PostgreSQL do ElephantSQL
const client = new Client({
  user: 'fkjgpfgm',
  host: 'postgres://fkjgpfgm:vdyRwP-BxYRUB000xUW-0MCGd0-1JsYJ@isabelle.db.elephantsql.com/fkjgpfgm',
  database: 'fkjgpfgm',
  password: 'vdyRwP-BxYRUB000xUW-0MCGd0-1JsYJ',
  port: 5432, // Porta padrão para o PostgreSQL
});

// Conecta ao banco de dados
client.connect()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados PostgreSQL!');
  })
  .catch(error => {
    console.error('Erro ao conectar ao banco de dados PostgreSQL:', error);
  })
  .finally(() => {
    // Fecha a conexão com o banco de dados, mesmo em caso de erro
    client.end();
  });

// Função para conectar ao banco de dados e executar uma consulta
//async function connectAndQuery() {
//  try {
//    await client.connect(); // Conecta ao banco de dados
//    const result = await client.query('SELECT * FROM sua_tabela'); // Executa uma consulta
//    console.log(result.rows); // Exibe os resultados
//  } catch (error) {
//    console.error('Erro ao conectar ao banco de dados:', error);
//  } finally {
//    await client.end(); // Fecha a conexão com o banco de dados
//  }
//}

// Chama a função para conectar e executar a consulta
connectAndQuery();
