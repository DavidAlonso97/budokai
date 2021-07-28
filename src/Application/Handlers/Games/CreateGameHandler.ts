import { inject, injectable } from 'inversify';
import Game from '../../../Domain/Entities/Game';
import CreateGameCommand from '../../../Application/Commands/Games/CreateGameCommand';
import GameRepositoryInterface from '../../../Domain/Interfaces/Repositories/GameRepositoryInterface';
import { INTERFACES } from '../../../Infrastructure/DI/Interfaces.types';

@injectable()
export default class CreateGameHandler {
  public constructor(
      @inject(INTERFACES.GameRepositoryInterface) private gameRepository: GameRepositoryInterface
  ) {
  }

  public async execute(command: CreateGameCommand): Promise<void> {
    let game = new Game(
      command.getName()
    );

    game = await this.gameRepository.persist(game);
  }
}
