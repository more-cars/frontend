import express from "express"

export async function privacy(req: express.Request, res: express.Response) {
    res.render('templates/legal/privacy', {
        page_title: 'Datenschutzerklärung / Privacy Policy',
    })
}
