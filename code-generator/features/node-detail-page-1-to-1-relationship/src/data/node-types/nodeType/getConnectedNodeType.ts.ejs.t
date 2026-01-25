---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(partnerNodeType) %>.ts
---
import {requestDataFromApi} from "../../requestDataFromApi"
import type {Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "./types/Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "./get<%= h.changeCase.pascal(nodeType) %>ById"
import type {<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "./types/<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnected<%= h.changeCase.pascal(partnerNodeType) %>(id: number) {
    const sourceNode = await get<%= h.changeCase.pascal(nodeType) %>ById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${id}/<%= h.changeCase.kebab(relationshipName) %>`)) as Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: <%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship = {
        id,
        name: DataRelationshipType.<%= h.changeCase.constant(nodeType) %>_<%= h.changeCase.constant(relationshipName) %>,
        source_node: sourceNode,
        source_node_type: DataNodeType.<%= h.changeCase.constant(nodeType) %>,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.<%= h.changeCase.constant(partnerNodeType) %>,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
