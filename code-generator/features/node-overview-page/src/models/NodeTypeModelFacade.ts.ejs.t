---
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
---
import {findAllNodes} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findAllNodes"

export const <%= h.changeCase.pascal(nodeType) %>ModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },
}
