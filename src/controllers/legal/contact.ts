import express from "express"

export async function contact(req: express.Request, res: express.Response) {
    res.render('templates/legal/contact', {
        page_title: 'Impressum / Legal Notice',
    })
}
