import express from "express"
import {Brand} from "../../models/Brand"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const brands = Brand.findAll()

    res.render('templates/brands/brands-page', {
        nodeCollection: brands
    })
}
