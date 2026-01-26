---
to: src/controllers/<%= h.changeCase.pascal(nodeType) %>ControllerFacade.ts
---
import express from "express"
import {displayAllNodes} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes"

export const <%= h.changeCase.pascal(nodeType) %>ControllerFacade = {
    async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    },
}
