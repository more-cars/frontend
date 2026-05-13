import express from "express"
import {sendResponse200} from "../responses/sendResponse200"

export async function contact(req: express.Request, res: express.Response) {
    res.render('templates/legal/contact', {
        page_title: 'Impressum / Legal Notice',
    }, (_, html) => {
        sendResponse200(html, res)
    })
}
