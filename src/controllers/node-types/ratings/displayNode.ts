import express from "express"
import {RatingModelFacade} from "../../../models/RatingModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getCarModelVariantThumbnails} from "../car-model-variants/getCarModelVariantThumbnails"
import {getMagazineIssueThumbnails} from "../magazine-issues/getMagazineIssueThumbnails"

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

    const carModelVariant = await RatingModelFacade.getConnectedCarModelVariant(ratingId)
    const magazineIssue = await RatingModelFacade.getConnectedMagazineIssue(ratingId)
    const images = await RatingModelFacade.getConnectedImages(ratingId)

    res.render('templates/node-types/ratings/rating-detail-page', {
        page_title: `${rating.rating_value} - Rating`,
        main_headline: `${rating.rating_value} / ${rating.scale_maximum} Points`,
        node: {
            type: ControllerNodeType.RATING,
            data: rating,
            title: RatingModelFacade.getNodeTitle(rating),
            node_properties: getNodeProperties(DataNodeType.RATING),
            main_image: await RatingModelFacade.getConnectedMainImage(ratingId),
        },
        relationships: {
            car_model_variant: {
                item: carModelVariant,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getCarModelVariantThumbnails(carModelVariant ? [carModelVariant] : []),
            },
            magazine_issue: {
                item: magazineIssue,
                node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
                thumbnails: await getMagazineIssueThumbnails(magazineIssue ? [magazineIssue] : []),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
