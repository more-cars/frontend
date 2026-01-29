import express from "express"
import {TrackLayoutModelFacade} from "../../../models/TrackLayoutModelFacade"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function displayNode(req: express.Request, res: express.Response) {
    const trackLayoutId = parseInt(req.params.id)
    const trackLayout = await TrackLayoutModelFacade.getNodeById(trackLayoutId)

    if (!trackLayout) {
        return res.render('templates/node-types/track-layouts/track-layout-not-found-page', {
            page_title: `Track Layout not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    res.render('templates/node-types/track-layouts/track-layout-detail-page', {
        page_title: `${trackLayout.name} - Track Layout`,
        node: {
            data: trackLayout,
            node_properties: getNodeProperties(DataNodeType.TRACK_LAYOUT),
            main_image: await TrackLayoutModelFacade.getConnectedMainImage(trackLayoutId),
        },
        relationships: {
            images: {
                items: await TrackLayoutModelFacade.getConnectedImages(trackLayoutId),
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
