import { Router } from "express";

import { KeyController } from "../controller/KeyController";

const keyRouter = Router();

const keyController = new KeyController();

keyRouter.post("/", (req, res, next) => keyController.createOne(req, res, next));

export default keyRouter;