import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiSessionResultAchievedWithCarModelVariantRelationship} from "./types/ApiSessionResultAchievedWithCarModelVariantRelationship"
import {getSessionResultById} from "./getSessionResultById"
import type {SessionResultAchievedWithCarModelVariantRelationship} from "./types/SessionResultAchievedWithCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedCarModelVariant(id: number) {
    const sourceNode = await getSessionResultById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/session-results/${id}/achieved-with-car-model-variant`)) as ApiSessionResultAchievedWithCarModelVariantRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: SessionResultAchievedWithCarModelVariantRelationship = {
        id,
        name: DataRelationshipType.SESSION_RESULT_ACHIEVED_WITH_CAR_MODEL_VARIANT,
        source_node: sourceNode,
        source_node_type: DataNodeType.SESSION_RESULT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.CAR_MODEL_VARIANT,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
