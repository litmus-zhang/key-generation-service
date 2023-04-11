import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()

export class Key {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    apiKey: string

    @Column(() => Date.now)
    date: number

    @OneToMany(() => User, user => user.keys)
    user: User
}