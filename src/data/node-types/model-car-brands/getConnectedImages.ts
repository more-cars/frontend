import {requestDataFromApi} from "../../requestDataFromApi"
import {getModelCarBrandById} from "./getModelCarBrandById"
import type {ApiModelCarBrandHasImageRelationship} from "./types/ApiModelCarBrandHasImageRelationship"
import type {ModelCarBrandHasImageRelationship} from "./types/ModelCarBrandHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getModelCarBrandById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/model-car-brands/${id}/has-image`)).data as ApiModelCarBrandHasImageRelationship[]
    const data: ModelCarBrandHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MODEL_CAR_BRAND_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
