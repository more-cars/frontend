import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {RatingModelFacade} from "../../../models/RatingModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const ratings = await RatingModelFacade.getAllNodes({page})

    res.render('templates/node-types/ratings/rating-overview-page', {
        page_title: 'All Ratings',
        main_headline: 'All Ratings',
        node_type: ControllerNodeType.RATING,
        node_collection: ratings,
        thumbnails: await getNodeThumbnails(ratings),
        node_properties: getNodeProperties(ControllerNodeType.RATING),
        pagination: {
            page,
            total: await RatingModelFacade.getTotalNodeCount(),
        },
    })
}
