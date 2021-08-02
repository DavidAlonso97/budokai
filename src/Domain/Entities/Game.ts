import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Elo from './Elo';
import Tournament from './Tournament';

@Entity('games')
export default class Game {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(_type => Tournament, tournament => tournament.game)
  public tournaments: Tournament[];

  @OneToMany(_type => Elo, elo => elo.game)
  public elos: Elo[];

  @Column()
  @CreateDateColumn()
  public createdAt: Date;
  
  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;

  public constructor(name: string) {
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }
}
