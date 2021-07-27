
// var express = require('express')
// var app = express()

// app.get('/', function (req: Request, res: Response) {
//   res.send('Api works!')
// })

// app.listen(3003, function () {
//   console.log('app listening on port 3003')
// })
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
    /*
    Start Express Project on a specific PORT
    # If you don't put "no-console" : false in tslint.json
    # TSLint will prevent this line and throw an error.
    */
    this.express.listen(port, () => {
      console.log('Express Application listening on port ' + port);
    });
  }
}

export default new Server();