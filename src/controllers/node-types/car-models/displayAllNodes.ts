import express from "express"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getPrimaryProperties} from "../../../models/node-types/getPrimaryProperties"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const carModels = await CarModelModelFacade.getAllNodes()

    return res.render('templates/car-models/car-models-page', {
        pageTitle: 'All Car Models',
        nodeCollection: carModels,
        primaryProperties: getPrimaryProperties(),
    }, (error, html) => {
        res.statusCode = 200
        res.send(html)
    })
}
