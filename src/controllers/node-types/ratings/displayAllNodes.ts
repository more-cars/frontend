import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {RatingModelFacade} from "../../../models/RatingModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.RATING)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

    const ratings = await RatingModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/ratings/rating-overview-page', {
        page_title: 'All Ratings',
        main_headline: 'All Ratings',
        node_type: ControllerNodeType.RATING,
        node_collection: ratings,
        thumbnails: await getNodeThumbnails(ratings),
        node_properties: getNodeProperties(ControllerNodeType.RATING),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await RatingModelFacade.getTotalNodeCount(),
        },
    })
}
