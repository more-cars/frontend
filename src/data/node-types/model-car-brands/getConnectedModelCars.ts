import {requestDataFromApi} from "../../requestDataFromApi"
import {getModelCarBrandById} from "./getModelCarBrandById"
import type {ApiModelCarBrandCreatedModelCarRelationship} from "./types/ApiModelCarBrandCreatedModelCarRelationship"
import type {ModelCarBrandCreatedModelCarRelationship} from "./types/ModelCarBrandCreatedModelCarRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ModelCarNode} from "../model-cars/types/ModelCarNode"

export async function getConnectedModelCars(id: number) {
    const sourceNode = await getModelCarBrandById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/model-car-brands/${id}/created-model-car`)).data as ApiModelCarBrandCreatedModelCarRelationship[]
    const data: ModelCarBrandCreatedModelCarRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MODEL_CAR_BRAND_CREATED_MODEL_CAR,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ModelCarNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
