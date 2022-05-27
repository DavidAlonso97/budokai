export default {
  host: process.env.TYPEORM_CONFIG_HOST || 'mysql',
  port: process.env.TYPEORM_CONFIG_PORT || '3306',
  username: process.env.TYPEORM_CONFIG_USERNAME || 'root',
  password: process.env.TYPEORM_CONFIG_PASSWORD || 'secret',
  database: process.env.TYPEORM_CONFIG_DATABASE || 'budokai',
  migrations: 'migrations',
};
