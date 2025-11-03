import express from "express"
import {Brand} from "../../models/Brand"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const brands = await Brand.findAll()

    return res.render('templates/brands/brands-page', {
        pageTitle: 'All Brands',
        nodeCollection: brands
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
