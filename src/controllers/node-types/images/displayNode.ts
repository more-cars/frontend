import express from "express"
import {ImageModelFacade} from "../../../models/ImageModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {sendResponse404} from "../../responses/sendResponse404"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const imageId = parseInt(req.params.id)
    const image = await ImageModelFacade.getNodeById(imageId)

    if (!image) {
        return sendResponse404(res)
    }

    const nodes = await ImageModelFacade.getConnectedNodes(imageId)

    res.render('templates/node-types/images/image-detail-page', {
        page_title: `${image.fields.name} - Image`,
        node: {
            data: image,
            title: ImageModelFacade.getNodeTitle(image),
            sub_title: ImageModelFacade.getNodeSubTitle(image),
            node_properties: getNodeProperties(DataNodeType.IMAGE),
            main_image: image,
        },
        relationships: {
            nodes: {
                items: nodes,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getNodeThumbnails(nodes),
            },
        },
    })
}
