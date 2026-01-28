import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCarModelThumbnails} from "./getCarModelThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const carModels = await CarModelModelFacade.getAllNodes({page})

    res.render('templates/node-types/car-models/car-models-page', {
        page_title: 'All Car Models',
        main_headline: 'All Car Models',
        node_collection: carModels,
        node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
        thumbnails: await getCarModelThumbnails(carModels),
        pagination: {
            page,
            total: 2648,
        },
    })
}
