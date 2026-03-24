import express, {type NextFunction} from "express"
import {NodeModelFacade} from "../../models/NodeModelFacade"
import {pluralize} from "inflection"

const urlPattern = /^(.*)__([0-9]+)$/

export async function redirectLegacyUrlToCanonical(req: express.Request, res: express.Response, next: NextFunction) {
    const url = req.params.legacyUrl

    if (!isLegacyUrl(url)) {
        return next()
    }

    const nodeId = extractNodeIdFromLegacyUrl(url)
    const modelNode = await NodeModelFacade.getNodeById(nodeId)

    if (!modelNode) {
        return res.render('templates/nodes/node-not-found-page', {
            page_title: `Node not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    return res.redirect(301, `${pluralize(modelNode.type.replace('_', ' '))}/${nodeId}`) // TODO return the canonical URL, not the node type URL
}

function isLegacyUrl(path: string) {
    return !!path.match(urlPattern)
}

function extractNodeIdFromLegacyUrl(path: string) {
    const match = path.match(urlPattern)

    if (match) {
        const id = match[2]
        return parseInt(id)
    }

    return -1
}
