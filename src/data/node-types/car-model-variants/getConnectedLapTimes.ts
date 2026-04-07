import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantAchievedLapTimeRelationship} from "./types/ApiCarModelVariantAchievedLapTimeRelationship"
import type {CarModelVariantAchievedLapTimeRelationship} from "./types/CarModelVariantAchievedLapTimeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {LapTimeNode} from "../lap-times/types/LapTimeNode"

export async function getConnectedLapTimes(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/achieved-lap-time`)).data as ApiCarModelVariantAchievedLapTimeRelationship[]
    const data: CarModelVariantAchievedLapTimeRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_LAP_TIME,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as LapTimeNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
