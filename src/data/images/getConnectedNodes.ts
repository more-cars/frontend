import {requestDataFromApi} from "../requestDataFromApi"
import type {ApiImageBelongsToNodeRelationship} from "./types/ApiImageBelongsToNodeRelationship"
import type {ImageBelongsToNodeRelationship} from "./types/ImageBelongsToNodeRelationship"
import {getImageById} from "./getImageById"
import {DataRelationshipType} from "../types/DataRelationshipType"
import {DataNodeType} from "../types/DataNodeType"

export async function getConnectedNodes(id: number) {
    const apiData = (await requestDataFromApi(`/images/${id}/belongs-to-node`)).data as ApiImageBelongsToNodeRelationship[]
    const data: ImageBelongsToNodeRelationship[] = []
    const sourceNode = await getImageById(id)

    const nodeTypeMapping = new Map<string, DataNodeType>([
        ['brand', DataNodeType.BRAND],
        ['car model', DataNodeType.CAR_MODEL],
        ['image', DataNodeType.IMAGE],
    ])

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.IMAGE_BELONGS_TO_NODE,
            source_node: sourceNode,
            source_node_type: DataNodeType.IMAGE,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: nodeTypeMapping.get(apiItem.data.relationship_partner.node_type) || DataNodeType.BRAND, // TODO proper fallback handling
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
