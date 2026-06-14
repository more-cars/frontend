import express from "express"
import {sendResponse404} from "../controllers/responses/sendResponse404"

export function notFound(req: express.Request, res: express.Response) {
    sendResponse404(res)
}
