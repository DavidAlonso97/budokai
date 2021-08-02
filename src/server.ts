import 'reflect-metadata';
import App from './App';
import express, { Application } from 'express';

class Server {
  private express: Application;
  private app: App;

  constructor() {
    this.express = express();
    this.app = new App(this.express);

    const PORT = process.env.PORT || 3002;
    this.up(Number(PORT));

    this.app.upServer();
  }

  private up(port: number) {
    this.express.listen(port, () => {
      console.log('Express Application listening on port ' + port);
    });
  }
}

export default new Server();
