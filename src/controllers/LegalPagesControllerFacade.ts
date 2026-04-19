import express from "express"
import {contact} from "./legal/contact.ts"

export const LegalPagesControllerFacade = {
    async contact(req: express.Request, res: express.Response) {
        await contact(req, res)
    },
}
