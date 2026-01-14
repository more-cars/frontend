---
to: src/controllers/<%= h.changeCase.pascal(nodeType) %>ControllerFacade.ts
---
import express from "express"
import {displayAllNodes} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes"

export class <%= h.changeCase.pascal(nodeType) %>ControllerFacade {
    static async showAllNodes(req: express.Request, res: express.Response) {
        await displayAllNodes(req, res)
    }
}
