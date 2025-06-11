import express from "express"
import {Brand} from "../../models/Brand"

export async function displayNode(req: express.Request, res: express.Response) {
    const brandId = parseInt(req.params.id)
    const brand = await Brand.findById(brandId)

    res.render('templates/brands/brand-page', {
        brand
    })
}
