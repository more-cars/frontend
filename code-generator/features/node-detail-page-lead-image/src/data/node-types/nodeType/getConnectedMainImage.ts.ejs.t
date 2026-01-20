---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnectedMainImage.ts
---
import {requestDataFromApi} from "../../requestDataFromApi"
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "./get<%= h.changeCase.pascal(nodeType) %>ById"
import type {Api<%= h.changeCase.pascal(nodeType) %>HasPrimeImageRelationship} from "./types/Api<%= h.changeCase.pascal(nodeType) %>HasPrimeImageRelationship"
import type {<%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship} from "./types/<%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${id}/has-prime-image`)) as Api<%= h.changeCase.pascal(nodeType) %>HasPrimeImageRelationship
    const sourceNode = await get<%= h.changeCase.pascal(nodeType) %>ById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: <%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship = {
        id,
        name: DataRelationshipType.<%= h.changeCase.constant(nodeType) %>_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.<%= h.changeCase.constant(nodeType) %>,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
