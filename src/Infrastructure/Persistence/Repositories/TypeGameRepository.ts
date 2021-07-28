import GameRepositoryInterface from '../../../Domain/Interfaces/Repositories/GameRepositoryInterface';
import Game from '../../../Domain/Entities/Game';
import { injectable } from 'inversify';
import TypeRepository from './TypeRepository';

@injectable()
export default class TypeGameRepository extends TypeRepository implements GameRepositoryInterface {
  public async findAll(): Promise<Game[]> {
    return await this.repository(Game).find();
  }

  public async findOneById(id: number): Promise<Game> {
    return await this.repository(Game).findOne(id);
  }

  public async findOneByGameName(name: string): Promise<Game> {
    return await this.repository(Game).findOne({ where: { name: name } });
  }

  public async persist(game: Game): Promise<Game> {
    return await this.repository(Game).save(game);
  }

  public async destroy(game: Game): Promise<boolean> {
    const result = await this.repository(Game).delete(game.getId());

    return result && result.affected === 1;
  }
}
