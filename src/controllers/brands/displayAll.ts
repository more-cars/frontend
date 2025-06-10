import express from "express"
import {Brand} from "../../models/Brand"

export async function displayAll(req: express.Request, res: express.Response) {
    const brands = Brand.findAll()

    res.render('brands/index', {
        title: 'All Brands - More Cars',
        message: 'All Brands',
        collection: brands
    })
}
