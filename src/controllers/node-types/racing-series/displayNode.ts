import express from "express"
import {RacingSeriesModelFacade} from "../../../models/RacingSeriesModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const racingSeriesId = parseInt(req.params.id)
    const racingSeries = await RacingSeriesModelFacade.getNodeById(racingSeriesId)

    if (!racingSeries) {
        return res.render('templates/node-types/racing-series/racing-series-not-found-page', {
            page_title: `Racing Series not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/racing-series/racing-series-detail-page', {
        page_title: `${racingSeries.name} - Racing Series`,
        node: {
            data: racingSeries,
            node_properties: getNodeProperties(DataNodeType.RACING_SERIES),
        },
        relationships: {
        },
    })
}
