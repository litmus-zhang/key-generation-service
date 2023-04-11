import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import bcrypt from "bcrypt";

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async createOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { fullName, email, password } = req.body
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = this.userRepository.create({ fullName, email, password: hashedPassword })
            await this.userRepository.save(user)
            res.status(201).json({
                message: "User Created successfully"
            })
            next()
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
}