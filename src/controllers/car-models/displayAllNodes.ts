import express from "express"
import {CarModel} from "../../models/CarModel.ts"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const carModels = await CarModel.findAll()

    return res.render('templates/car-models/car-models-page', {
        pageTitle: 'All Car Models',
        nodeCollection: carModels
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
