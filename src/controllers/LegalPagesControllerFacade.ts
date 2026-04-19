import express from "express"
import {contact} from "./legal/contact.ts"
import {privacy} from "./legal/privacy.ts"

export const LegalPagesControllerFacade = {
    async contact(req: express.Request, res: express.Response) {
        await contact(req, res)
    },

    async privacy(req: express.Request, res: express.Response) {
        await privacy(req, res)
    },
}
