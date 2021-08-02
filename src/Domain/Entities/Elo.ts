import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Game from './Game';
import Player from './Player';

@Entity('elos')
export default class Elo {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToOne(_type => Player, player => player.elos)
  public player: Player;

  @OneToOne(_type => Game, game => game.elos)
  public game: Game;

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  public constructor(player: Player, game: Game) {
    this.player = player;
    this.game = game;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public getId(): number {
    return this.id;
  }
}
