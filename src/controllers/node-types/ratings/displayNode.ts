import express from "express"
import {RatingModelFacade} from "../../../models/RatingModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const ratingId = parseInt(req.params.id)
    const rating = await RatingModelFacade.getNodeById(ratingId)

    if (!rating) {
        return sendResponse404(res)
    }

    const carModelVariant = await RatingModelFacade.getConnectedCarModelVariant(ratingId)
    const magazineIssue = await RatingModelFacade.getConnectedMagazineIssue(ratingId)
    const images = await RatingModelFacade.getConnectedImages(ratingId)

    res.render('templates/node-types/ratings/rating-detail-page', {
        page_title: `${rating.fields.rating_value} - Rating`,
        node: {
            type: ControllerNodeType.RATING,
            data: rating,
            title: RatingModelFacade.getNodeTitle(rating),
            sub_title: RatingModelFacade.getNodeSubTitle(rating),
            node_properties: getNodeProperties(DataNodeType.RATING),
            main_image: await RatingModelFacade.getConnectedMainImage(ratingId),
        },
        relationships: {
            car_model_variant: {
                item: carModelVariant,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getNodeThumbnails(carModelVariant ? [carModelVariant] : []),
            },
            magazine_issue: {
                item: magazineIssue,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getNodeThumbnails(magazineIssue ? [magazineIssue] : []),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
