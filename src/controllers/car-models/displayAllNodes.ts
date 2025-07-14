import express from "express"
import {CarModel} from "../../models/CarModel.ts"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const carModels = await CarModel.findAll()

    res.render('templates/car-models/car-models-page', {
        pageTitle: 'All Car Models',
        nodeCollection: carModels
    })
}
