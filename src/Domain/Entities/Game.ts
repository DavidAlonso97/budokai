import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Tournament from "./Tournament";

@Entity('games')
export default class Game
{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;
    
    @OneToMany(_type => Tournament, tournament => tournament.game)
    public tournaments: Tournament[];

    @Column()
    @CreateDateColumn()
    public createdAt: Date;
    @Column()
    @UpdateDateColumn()
    public updatedAt: Date;
  
    public constructor(
        name: string,
        ) {
      this.name = name;
    }

    public getId(): number {
        return this.id;
    }
}