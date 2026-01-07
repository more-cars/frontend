import {requestDataFromApi} from "../../requestDataFromApi"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiCarModelHasPrimeImageRelationship} from "./types/ApiCarModelHasPrimeImageRelationship"
import {getCarModelById} from "./getCarModelById"
import type {CarModelHasMainImageRelationship} from "./types/CarModelHasMainImageRelationship"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/car-models/${id}/has-prime-image`)) as ApiCarModelHasPrimeImageRelationship
    const sourceNode = await getCarModelById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: CarModelHasMainImageRelationship = {
        id,
        name: DataRelationshipType.CAR_MODEL_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.CAR_MODEL,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
