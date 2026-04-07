import {requestDataFromApi} from "../../requestDataFromApi"
import {getModelCarBrandById} from "./getModelCarBrandById"
import type {ApiModelCarBrandHasVideoRelationship} from "./types/ApiModelCarBrandHasVideoRelationship"
import type {ModelCarBrandHasVideoRelationship} from "./types/ModelCarBrandHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
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
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MODEL_CAR_BRAND_HAS_VIDEO,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
