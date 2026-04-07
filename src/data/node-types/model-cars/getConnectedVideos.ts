import {requestDataFromApi} from "../../requestDataFromApi"
import {getModelCarById} from "./getModelCarById"
import type {ApiModelCarHasVideoRelationship} from "./types/ApiModelCarHasVideoRelationship"
import type {ModelCarHasVideoRelationship} from "./types/ModelCarHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getModelCarById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/model-cars/${id}/has-video`)).data as ApiModelCarHasVideoRelationship[]
    const data: ModelCarHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MODEL_CAR_HAS_VIDEO,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
