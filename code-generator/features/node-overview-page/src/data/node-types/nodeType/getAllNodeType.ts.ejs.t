---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>.ts
---
import {requestDataFromApi} from "../../requestDataFromApi"
import type {Api<%= h.changeCase.pascal(nodeType) %>Node} from "./types/Api<%= h.changeCase.pascal(nodeType) %>Node"
import type {<%= h.changeCase.pascal(nodeType) %>Node} from "./types/<%= h.changeCase.pascal(nodeType) %>Node"

export async function getAll<%= h.changeCase.pascal(h.inflection.pluralize(nodeType)) %>() {
    const apiData = (await requestDataFromApi('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>?sort_by_property=name')).data as Api<%= h.changeCase.pascal(nodeType) %>Node[]
    const data: <%= h.changeCase.pascal(nodeType) %>Node[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
