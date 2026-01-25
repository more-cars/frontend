---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>.ts
---
import {requestDataFromApi} from "../../requestDataFromApi"
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "./get<%= h.changeCase.pascal(nodeType) %>ById"
import type {Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "./types/Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"
import type {<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "./types/<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id: number) {
    const sourceNode = await get<%= h.changeCase.pascal(nodeType) %>ById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${id}/<%= h.changeCase.kebab(relationshipName) %>`)).data as Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship[]
    const data: <%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.<%= h.changeCase.constant(nodeType) %>_<%= h.changeCase.constant(relationshipName) %>,
            source_node: sourceNode,
            source_node_type: DataNodeType.<%= h.changeCase.constant(nodeType) %>,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.<%= h.changeCase.constant(partnerNodeType) %>,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
