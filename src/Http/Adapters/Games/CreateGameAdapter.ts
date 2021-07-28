import { injectable } from 'inversify';
import CreateGameCommand from '../../../Application/Commands/Games/CreateGameCommand';

@injectable()
export default class CreateGameAdapter {

  public constructor() {
  }

  public from(body: any): CreateGameCommand {
    return new CreateGameCommand(
      body.name
    );
  }
}