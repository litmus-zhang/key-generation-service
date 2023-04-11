import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Key } from "./Key";
import { IsEmail } from "class-validator";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    fullName: string

    @Column(
        {
            unique: true
        }
    )
    @IsEmail()
    email: string

    @Column()
    password: string

    // @ManyToOne(() => ApiKey, (key) => key.user)
    // apikeys: ApiKey[]

    

}