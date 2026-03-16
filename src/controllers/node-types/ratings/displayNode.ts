import express from "express"
import {RatingModelFacade} from "../../../models/RatingModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const ratingId = parseInt(req.params.id)
    const rating = await RatingModelFacade.getNodeById(ratingId)

    if (!rating) {
        return res.render('templates/node-types/ratings/rating-not-found-page', {
            page_title: `Rating not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/ratings/rating-detail-page', {
        page_title: `${rating.rating_value} - Rating`,
        node: {
            type: ControllerNodeType.RATING,
            data: rating,
            node_properties: getNodeProperties(DataNodeType.RATING),
            main_image: await RatingModelFacade.getConnectedMainImage(ratingId),
        },
        relationships: {},
    })
}
