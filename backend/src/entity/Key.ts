import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { generateApiKey } from "../utils/generate";

@Entity()

export class Key {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        unique: true
    })
    value: string

    @CreateDateColumn()
    createdAt: Date

    // @Column("uuid")
    // userId: string;

    // @OneToMany(() => User, user => user.apikeys)
    // user: User

}