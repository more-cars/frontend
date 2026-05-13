import express from "express"
import {sendResponse200} from "../responses/sendResponse200"

export async function privacy(req: express.Request, res: express.Response) {
    res.render('templates/legal/privacy', {
        page_title: 'Datenschutzerklärung / Privacy Policy',
    }, (_, html) => {
        sendResponse200(html, res)
    })
}
