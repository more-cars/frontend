import express from "express"
import {PriceModelFacade} from "../../../models/PriceModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const priceId = parseInt(req.params.id)
    const price = await PriceModelFacade.getNodeById(priceId)

    if (!price) {
        return res.render('templates/node-types/prices/price-not-found-page', {
            page_title: `Price not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/prices/price-detail-page', {
        page_title: `${price.price} - Price`,
        main_headline: `${price.price} ${price.currency_code}`,
        node: {
            type: ControllerNodeType.PRICE,
            data: price,
            node_properties: getNodeProperties(DataNodeType.PRICE),
            main_image: await PriceModelFacade.getConnectedMainImage(priceId),
        },
        relationships: {},
    })
}
