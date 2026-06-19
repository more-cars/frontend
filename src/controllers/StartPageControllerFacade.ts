import express from "express"
import {display} from "./start-page/display"

export const StartPageControllerFacade = {
    async show(req: express.Request, res: express.Response) {
        await display(req, res)
    },
}
