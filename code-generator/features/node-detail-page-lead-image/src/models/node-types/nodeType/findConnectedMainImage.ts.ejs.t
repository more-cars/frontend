---
to: src/models/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/findConnectedMainImage.ts
---
import {<%= h.changeCase.pascal(nodeType) %>DataFacade} from "../../../data/<%= h.changeCase.pascal(nodeType) %>DataFacade"
import {convertImageNode} from "../images/convertImageNode"

export async function findConnectedMainImage(id: number) {
    const relation = await <%= h.changeCase.pascal(nodeType) %>DataFacade.getConnectedMainImageNode(id)

    if (!relation) {
        return null
    }

    return convertImageNode(relation.partner_node)
}
