import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import {ApiCarModelHasSuccessorRelationship} from "./types/ApiCarModelHasSuccessorRelationship"
import {CarModelHasSuccessorRelationship} from "./types/CarModelHasSuccessorRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedSuccessorCarModel(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/has-successor`)) as ApiCarModelHasSuccessorRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: CarModelHasSuccessorRelationship = {
        id,
        name: DataRelationshipType.CAR_MODEL_HAS_SUCCESSOR,
        source_node: sourceNode,
        source_node_type: DataNodeType.CAR_MODEL,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.CAR_MODEL,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
