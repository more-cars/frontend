---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findNodeById.ts
---
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {convert<%= h.changeCase.pascal(nodeType) %>Node} from "./convert<%= h.changeCase.pascal(nodeType) %>Node"

export async function findNodeById(id: number) {
    const node = await <%= h.changeCase.pascal(nodeType) %>DataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convert<%= h.changeCase.pascal(nodeType) %>Node(node)
}
