---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>.ts
---
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "./get<%= h.changeCase.pascal(nodeType) %>ById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "./types/Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"
import type {<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship} from "./types/<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {<%= h.changeCase.pascal(partnerNodeType) %>Node} from "../<%= h.changeCase.kebab(h.inflection.pluralize(partnerNodeType)) %>/types/<%= h.changeCase.pascal(partnerNodeType) %>Node"

export async function getConnected<%= h.changeCase.pascal(h.inflection.pluralize(partnerNodeType)) %>(id: number) {
    const sourceNode = await get<%= h.changeCase.pascal(nodeType) %>ById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${id}/<%= h.changeCase.kebab(relationshipName) %>`)) as Api<%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship
    const data: <%= h.changeCase.pascal(nodeType) %><%= h.changeCase.pascal(relationshipName) %>Relationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.<%= h.changeCase.constant(nodeType) %>_<%= h.changeCase.constant(relationshipName) %>,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as <%= h.changeCase.pascal(partnerNodeType) %>Node,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
