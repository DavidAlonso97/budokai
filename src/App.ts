import { Application } from 'express';
import dotenv from 'dotenv';
import DatabaseConnection from './Infrastructure/Persistence/DatabaseConnection';
import PublicIndex from './routes/PublicRoutes/Index';
import DIContainer from './Infrastructure/DI/di.config';

class App {
  private app: Application;
  private publicRoutes: PublicIndex;

  public constructor(
      express: Application,
      ) {
    this.app = express;
  }

  public async upServer() {
    const result = dotenv.config();

    if (result.error) {
      throw new Error(`Environment variables not configured, aborting`);
    }
    this.publicRoutes = DIContainer.resolve<PublicIndex>(PublicIndex);

    await this.setDatabaseConnection();
    this.setPublicRoutes();
  }

  private async setDatabaseConnection(): Promise<void> {
    const dbConnection = new DatabaseConnection();
    await dbConnection.getConnection();
  }

  public getAppInstance(): Application {
    return this.app;
  }

  private setPublicRoutes() {
    this.app.use('/public', this.publicRoutes.getRoutes());
  }
}

export default App;