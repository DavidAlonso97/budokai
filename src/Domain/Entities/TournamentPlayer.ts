import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Player from './Player';
import Tournament from './Tournament';

@Entity('tournament_players')
export default class TournamentPlayer {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(_type => Player, player => player.tournamentPlayers)
  public player: Player;

  @ManyToOne(_type => Tournament, tournament => tournament.tournamentPlayers)
  public tournament: Tournament;

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  public constructor(player: Player, tournament: Tournament) {
    this.player = player;
    this.tournament = tournament;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public getId(): number {
    return this.id;
  }
}
