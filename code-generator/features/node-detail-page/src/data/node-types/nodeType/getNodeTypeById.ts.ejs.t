---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/get<%= h.changeCase.pascal(nodeType) %>ById.ts
---
import {requestDataFromApi} from "../../requestDataFromApi"
import type {Api<%= h.changeCase.pascal(nodeType) %>Node} from "./types/Api<%= h.changeCase.pascal(nodeType) %>Node"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {<%= h.changeCase.pascal(nodeType) %>Node} from "./types/<%= h.changeCase.pascal(nodeType) %>Node"

export async function get<%= h.changeCase.pascal(nodeType) %>ById(id: number) {
    const apiData = (await requestDataFromApi(`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${id}`)) as Api<%= h.changeCase.pascal(nodeType) %>Node

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as <%= h.changeCase.pascal(nodeType) %>Node
}
