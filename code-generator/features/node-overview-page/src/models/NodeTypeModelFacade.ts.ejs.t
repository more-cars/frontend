---
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
---
import {findAllNodes} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findAllNodes"

export const <%= h.changeCase.pascal(nodeType) %>ModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        // TODO This is a temporary hack until the API can provide this information.
        //      Right now, only the pagination bar needs this information.
        //      It only needs to know if there are more than 100 items or not.
        //      Therefore, returning either 100 or 101.
        const page2nodes = await findAllNodes({page: 2})

        return page2nodes.length > 0 ? 101 : 100
    },
}
