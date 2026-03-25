import express from "express"
import {convertLegacyId} from "./convertLegacyId"
import {NodeModelFacade} from "../../models/NodeModelFacade"
import {canonicalUrlPath} from "../../views/lib/canonicalUrlPath"
import {getNodeTitle} from "../../models/getNodeTitle"

export async function redirectNodeTypeUrlToCanonical(req: express.Request, res: express.Response) {
    const nodeId = convertLegacyId(req.params.id)
    const modelNode = await NodeModelFacade.getNodeById(nodeId)

    if (!modelNode) {
        return res.render('templates/nodes/node-not-found-page', {
            page_title: `Node not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const redirectUrl = `../${canonicalUrlPath(nodeId, getNodeTitle(modelNode))}`

    return res.redirect(301, redirectUrl)
}
