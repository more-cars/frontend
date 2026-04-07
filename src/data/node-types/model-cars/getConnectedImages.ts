import {requestDataFromApi} from "../../requestDataFromApi"
import {getModelCarById} from "./getModelCarById"
import type {ApiModelCarHasImageRelationship} from "./types/ApiModelCarHasImageRelationship"
import type {ModelCarHasImageRelationship} from "./types/ModelCarHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getModelCarById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/model-cars/${id}/has-image`)).data as ApiModelCarHasImageRelationship[]
    const data: ModelCarHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MODEL_CAR_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
