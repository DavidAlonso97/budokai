import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { HTTP_CODES } from '../../Enums/HttpStatusCode';
import CreateGameCommand from '../../../Application/Commands/Games/CreateGameCommand';
import CreateGameAdapter from '../../../Http/Adapters/Games/CreateGameAdapter';
import CreateGameHandler from '../../../Application/Handlers/Games/CreateGameHandler';

@injectable()
export default class CreateGameAction {
  public constructor(
    @inject(CreateGameAdapter) private adapter: CreateGameAdapter,
    @inject(CreateGameHandler) private handler: CreateGameHandler,
  ) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    const command: CreateGameCommand = this.adapter.from(req.body);
    await this.handler.execute(command);
    return res.sendStatus(HTTP_CODES.CREATED);
  }
}
