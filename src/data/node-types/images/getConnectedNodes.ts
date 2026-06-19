import {getImageById} from "./getImageById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiImageBelongsToNodeRelationship} from "./types/ApiImageBelongsToNodeRelationship"
import type {ImageBelongsToNodeRelationship} from "./types/ImageBelongsToNodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {DataNode} from "../../types/DataNode"

export async function getConnectedNodes(id: number) {
    const sourceNode = await getImageById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/images/${id}/belongs-to-node`)) as ApiImageBelongsToNodeRelationship
    const data: ImageBelongsToNodeRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.IMAGE_BELONGS_TO_NODE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as DataNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
