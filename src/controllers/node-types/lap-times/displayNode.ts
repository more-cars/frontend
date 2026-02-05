import express from "express"
import {LapTimeModelFacade} from "../../../models/LapTimeModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const lapTimeId = parseInt(req.params.id)
    const lapTime = await LapTimeModelFacade.getNodeById(lapTimeId)

    if (!lapTime) {
        return res.render('templates/node-types/lap-times/lap-time-not-found-page', {
            page_title: `Lap Time not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/lap-times/lap-time-detail-page', {
        page_title: `${lapTime.driver_name} - Lap Time`,
        main_headline: `${lapTime.driver_name}`,
        node: {
            data: lapTime,
            node_properties: getNodeProperties(DataNodeType.LAP_TIME),
            main_image: await LapTimeModelFacade.getConnectedMainImage(lapTimeId),
        },
        relationships: {},
    })
}
