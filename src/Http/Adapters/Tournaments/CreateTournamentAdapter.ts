import { injectable } from 'inversify';
import CreateTournamentCommand from '../../../Application/Commands/Tournaments/CreateTournamentCommand';

@injectable()
export default class CreateTournamentAdapter {
  public constructor() {}

  public from(body: any): CreateTournamentCommand {
    return new CreateTournamentCommand(body.participants);
  }
}
