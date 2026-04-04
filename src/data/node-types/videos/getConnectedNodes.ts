import {getVideoById} from "./getVideoById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiVideoBelongsToNodeRelationship} from "./types/ApiVideoBelongsToNodeRelationship"
import type {VideoBelongsToNodeRelationship} from "./types/VideoBelongsToNodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {DataNode} from "../../types/DataNode"
import {mapApiNodeTypeToDataNodeType} from "../../lib/mapApiNodeTypeToDataNodeType"

export async function getConnectedNodes(id: number) {
    const sourceNode = await getVideoById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/videos/${id}/belongs-to-node`)).data as ApiVideoBelongsToNodeRelationship[]
    const data: VideoBelongsToNodeRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.VIDEO_BELONGS_TO_NODE,
            source_node: sourceNode,
            source_node_type: DataNodeType.VIDEO,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as DataNode,
            partner_node_type: mapApiNodeTypeToDataNodeType(apiItem.data.partner_node.node_type),
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
