import express, {type NextFunction} from "express"
import {NodeModelFacade} from "../../models/NodeModelFacade"

const urlPattern = /^(.*)__([0-9]+)$/

export async function redirectLegacyUrlToCanonical(req: express.Request, res: express.Response, next: NextFunction) {
    const url = req.params.legacyUrl

    if (!isShortcutUrl(url)) {
        return next()
    }

    const nodeId = extractNodeIdFromLegacyUrl(url)
    const nodeType = await NodeModelFacade.getNodeTypeOfNode(nodeId)

    if (!nodeType) {
        return res.render('templates/nodes/node-not-found-page', {
            page_title: `Node not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    return res.redirect(301, `${nodeType}/${nodeId}`) // TODO return the canonical URL, not the node type URL
}

function isShortcutUrl(path: string) {
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
