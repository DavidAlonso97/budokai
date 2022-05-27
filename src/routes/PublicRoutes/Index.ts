import { injectable, inject } from 'inversify';
import express, { Router, Request, Response } from 'express';
import CreateTournamentAction from '../../Http/Actions/Tournaments/CreateTournamentAction';

@injectable()
class PublicIndex {
  private router: Router;

  public constructor(
    @inject(CreateTournamentAction) private createTournamentAction: CreateTournamentAction,
  ) {
    this.router = express.Router();
    this.setRoutes();
  }

  private setRoutes() {
    this.router.get('/ping', (request: Request, response: Response) => {
      console.log(request);
      response.status(200).json('Api works!');
    });
    this.router.post('/tournaments', (request: Request, response: Response) => {
      return this.createTournamentAction.execute(request, response);
    });
  }

  public getRoutes() {
    return this.router;
  }
}

export default PublicIndex;
