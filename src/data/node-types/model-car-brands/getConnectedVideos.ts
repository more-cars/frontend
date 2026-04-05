import {requestDataFromApi} from "../../requestDataFromApi"
import {getModelCarBrandById} from "./getModelCarBrandById"
import type {ApiModelCarBrandHasVideoRelationship} from "./types/ApiModelCarBrandHasVideoRelationship"
import type {ModelCarBrandHasVideoRelationship} from "./types/ModelCarBrandHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getModelCarBrandById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/model-car-brands/${id}/has-video`)).data as ApiModelCarBrandHasVideoRelationship[]
    const data: ModelCarBrandHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.MODEL_CAR_BRAND_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.MODEL_CAR_BRAND,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
