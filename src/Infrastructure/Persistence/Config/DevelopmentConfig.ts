import { ConnectionOptions } from 'typeorm';
import DatabaseVariables from './DatabaseVariables';

export default {
  type: 'mysql',
  host: DatabaseVariables.host,
  port: Number(DatabaseVariables.port),
  username: DatabaseVariables.username,
  password: DatabaseVariables.password,
  database: DatabaseVariables.database,
  synchronize: false,
  logging: true,
  migrations: ['src/Infrastructure/Persistence/Migrations/**/*.ts'],
  migrationsTableName: DatabaseVariables.migrations,
  migrationsRun: true,
  entities: ['src/Domain/Entities/**/*.ts'],
  cli: {
    migrationsDir: 'src/Infrastructure/Persistence/Migrations',
    entitiesDir: 'src/Domain/Entities',
  },
} as ConnectionOptions;
