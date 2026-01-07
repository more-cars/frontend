import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import {ApiCarModelIsSuccessorOfRelationship} from "./types/ApiCarModelIsSuccessorOfRelationship"
import {CarModelIsSuccessorOfRelationship} from "./types/CarModelIsSuccessorOfRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedPredecessorCarModel(id: number) {
    const apiData = (await requestDataFromApi(`/car-models/${id}/is-successor-of`)) as ApiCarModelIsSuccessorOfRelationship
    const sourceNode = await getCarModelById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const data: CarModelIsSuccessorOfRelationship = {
        id,
        name: DataRelationshipType.CAR_MODEL_IS_SUCCESSOR_OF,
        source_node: sourceNode,
        source_node_type: DataNodeType.CAR_MODEL,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.CAR_MODEL,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
