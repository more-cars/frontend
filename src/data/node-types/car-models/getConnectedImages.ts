import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelHasImageRelationship} from "./types/ApiCarModelHasImageRelationship"
import type {CarModelHasImageRelationship} from "./types/CarModelHasImageRelationship"
import {getCarModelById} from "./getCarModelById"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const apiData = (await requestDataFromApi(`/car-models/${id}/has-image`)).data as ApiCarModelHasImageRelationship[]
    const data: CarModelHasImageRelationship[] = []
    const sourceNode = await getCarModelById(id)

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
