---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(partnerNodeType) %>.ts
---
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "./get<%= h.changeCase.pascal(nodeType) %>ById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "./types/Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"
import type {<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "./types/<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {<%= h.changeCase.pascal(partnerNodeType) %>Node} from "../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/types/<%= h.changeCase.pascal(partnerNodeType) %>Node"

export async function getConnected<%= h.changeCase.pascal(partnerNodeType) %>(id: number) {
    const sourceNode = await get<%= h.changeCase.pascal(nodeType) %>ById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${id}/<%= h.changeCase.kebab(relationshipName) %>`)) as Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: <%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.<%= h.changeCase.constant(nodeType) %>_<%= h.changeCase.constant(relationshipName) %>,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as <%= h.changeCase.pascal(partnerNodeType) %>Node,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
