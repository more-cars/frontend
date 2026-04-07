import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeAchievedWithCarModelVariantRelationship} from "./types/ApiLapTimeAchievedWithCarModelVariantRelationship"
import {getLapTimeById} from "./getLapTimeById"
import type {LapTimeAchievedWithCarModelVariantRelationship} from "./types/LapTimeAchievedWithCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariant(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/achieved-with-car-model-variant`)) as ApiLapTimeAchievedWithCarModelVariantRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: LapTimeAchievedWithCarModelVariantRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.LAP_TIME_ACHIEVED_WITH_CAR_MODEL_VARIANT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as CarModelVariantNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
