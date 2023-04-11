import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Key } from "./Key"

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    password: string

    @ManyToOne(() => Key, (key) => key.user)
    keys: Key[]

}
