import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Elo from './Elo';
import TournamentPlayer from './TournamentPlayer';

@Entity('players')
export default class Player {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nickname: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public avatar: string;

  @OneToMany(_type => TournamentPlayer, tournamentPlayer => tournamentPlayer.player)
  public tournamentPlayers: TournamentPlayer[];

  @OneToMany(_type => Elo, elo => elo.player)
  public elos: Elo[];

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  public constructor(nickname: string, email: string, password: string, avatar: string) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public getId(): number {
    return this.id;
  }
}
