import express from "express"
import {Brand} from "../../models/Brand.ts"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const brands = await Brand.findAll()

    res.render('templates/brands/brands-page', {
        pageTitle: 'All Brands',
        nodeCollection: brands
    })
}
