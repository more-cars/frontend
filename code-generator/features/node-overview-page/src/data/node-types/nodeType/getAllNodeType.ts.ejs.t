---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>.ts
---
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {Api<%= h.changeCase.pascal(nodeType) %>Node} from "./types/Api<%= h.changeCase.pascal(nodeType) %>Node"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {<%= h.changeCase.pascal(nodeType) %>Node} from "./types/<%= h.changeCase.pascal(nodeType) %>Node"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.<%= h.changeCase.constant(nodeType) %>, params)
    const apiData: Api<%= h.changeCase.pascal(nodeType) %>Node[] = (await requestDataFromApi(url))?.data || []
    const data: <%= h.changeCase.pascal(nodeType) %>Node[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem.attributes, apiItem.id) as <%= h.changeCase.pascal(nodeType) %>Node)
    })

    return data
}
