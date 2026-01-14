---
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
---
import {findAllNodes} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findAllNodes"

export class <%= h.changeCase.pascal(nodeType) %>ModelFacade {
    static async getAllNodes() {
        return findAllNodes()
    }
}
