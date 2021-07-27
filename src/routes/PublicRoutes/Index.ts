import { injectable } from 'inversify';
import express, { Router, Request, Response } from 'express';

@injectable()
class PublicIndex {
  private router: Router;

  public constructor(
  ) {
    this.router = express.Router();
    this.setRoutes();
  }

  private setRoutes() {
    this.router.get(
      '/ping',
      (request: Request, response: Response) => {
        console.log(request);
        response.status(200)
        .json('Api works!');
      },
    );

  }

  public getRoutes() {
    return this.router;
  }
}

export default PublicIndex;
