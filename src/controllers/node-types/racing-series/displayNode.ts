import express from "express"
import {RacingSeriesModelFacade} from "../../../models/RacingSeriesModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getRacingEventThumbnails} from "../racing-events/getRacingEventThumbnails"

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

    const images = await RacingSeriesModelFacade.getConnectedImages(racingSeriesId)
    const racingEvents = await RacingSeriesModelFacade.getConnectedRacingEvents(racingSeriesId)

    res.render('templates/node-types/racing-series/racing-series-detail-page', {
        page_title: `${racingSeries.name} - Racing Series`,
        node: {
            data: racingSeries,
            node_properties: getNodeProperties(DataNodeType.RACING_SERIES),
            main_image: await RacingSeriesModelFacade.getConnectedMainImage(racingSeriesId),
        },
        relationships: {
            racing_events: {
                items: racingEvents,
                node_properties: getNodeProperties(DataNodeType.RACING_EVENT),
                thumbnails: await getRacingEventThumbnails(racingEvents),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
