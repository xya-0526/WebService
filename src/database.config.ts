export const dbConfig = {
  type: (process.env.DB_TYPE || 'mysql') as 'mysql' | 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'xya0526.',
  database: process.env.DB_NAME || 'webdb',
};
console.log('🔧 当前数据库配置：', dbConfig);
