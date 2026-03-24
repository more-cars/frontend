---
to: src/models/<%= h.changeCase.pascal(nodeType) %>ModelFacade.ts
---
import {findAllNodes} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import type {Brand} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/types/<%= h.changeCase.pascal(nodeType) %>"
import {getNodeTitle} from "./node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getNodeTitle"

export const <%= h.changeCase.pascal(nodeType) %>ModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.<%= h.changeCase.constant(nodeType) %>)
    },

    getNodeTitle(node: <%= h.changeCase.pascal(nodeType) %>) {
        return getNodeTitle(node)
    },
}
