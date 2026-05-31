---
to: src/data/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/getConnectedMainImage.ts
---
import {requestDataFromApi} from "../../requestDataFromApi"
import {get<%= h.changeCase.pascal(nodeType) %>ById} from "./get<%= h.changeCase.pascal(nodeType) %>ById"
import type {Api<%= h.changeCase.pascal(nodeType) %>HasPrimeImageRelationship} from "./types/Api<%= h.changeCase.pascal(nodeType) %>HasPrimeImageRelationship"
import type {<%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship} from "./types/<%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await get<%= h.changeCase.pascal(nodeType) %>ById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/${id}/has-prime-image`)) as Api<%= h.changeCase.pascal(nodeType) %>HasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: <%= h.changeCase.pascal(nodeType) %>HasMainImageRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.<%= h.changeCase.constant(nodeType) %>_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ImageNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
