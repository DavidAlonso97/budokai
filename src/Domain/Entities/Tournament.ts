import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Game from './Game';
import TournamentPlayer from './TournamentPlayer';

@Entity('tournaments')
export default class Tournament {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public code: string;

  @ManyToOne(_type => Game, game => game.tournaments)
  public game: Game;

  @OneToMany(_type => TournamentPlayer, tournamentPlayer => tournamentPlayer.tournament)
  public tournamentPlayers: TournamentPlayer[];

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  public constructor(game: Game) {
    this.game = game;
    this.code = this.createRandomCode();
  }

  public createRandomCode(): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * 62));
    }
    return result;
  }
}
