import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiSessionResultAchievedWithCarModelVariantRelationship} from "./types/ApiSessionResultAchievedWithCarModelVariantRelationship"
import {getSessionResultById} from "./getSessionResultById"
import type {SessionResultAchievedWithCarModelVariantRelationship} from "./types/SessionResultAchievedWithCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.SESSION_RESULT_ACHIEVED_WITH_CAR_MODEL_VARIANT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as CarModelVariantNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
