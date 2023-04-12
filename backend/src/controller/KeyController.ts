import { AppDataSource } from "../data-source";
import { Key } from "../entity/Key";
import { NextFunction, Request, Response } from "express";
import { generateApiKey } from "../utils/generate";

export class KeyController {
    private keyRepository = AppDataSource.getRepository(Key);

    async createOne(_req: Request, res: Response, _next: NextFunction) {
        try {
            const newApiKey = new Key();
            newApiKey.value = await generateApiKey();
            console.log(newApiKey)
            await this.keyRepository.save(newApiKey);
            res.status(201).json({
                message: "Key generated successfully",
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}