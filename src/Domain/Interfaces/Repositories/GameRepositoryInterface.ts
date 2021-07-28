import Game from '../../Entities/Game';

export default interface GameRepositoryInterface {
  findAll(): Promise<Game[]>;
  findOneById(id: number): Promise<Game>;
  findOneByGameName(name: string): Promise<Game>;
  persist(game: Game): Promise<Game>;
  destroy(game: Game): Promise<boolean>;
}
