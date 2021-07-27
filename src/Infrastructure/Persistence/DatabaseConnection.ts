import { createConnection } from 'typeorm';
import DevelopmentConfig from './Config/DevelopmentConfig';

export default class DatabaseConnection {
  public async getConnection(): Promise<void> {
    await createConnection(DevelopmentConfig).catch(err => console.log('error on connection to db: ' + err));
    
  }
}
