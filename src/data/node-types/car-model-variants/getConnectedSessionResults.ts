import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantAchievedSessionResultRelationship} from "./types/ApiCarModelVariantAchievedSessionResultRelationship"
import type {CarModelVariantAchievedSessionResultRelationship} from "./types/CarModelVariantAchievedSessionResultRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {SessionResultNode} from "../session-results/types/SessionResultNode"

export async function getConnectedSessionResults(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/achieved-session-result`)).data as ApiCarModelVariantAchievedSessionResultRelationship[]
    const data: CarModelVariantAchievedSessionResultRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_SESSION_RESULT,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL_VARIANT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as SessionResultNode,
            partner_node_type: DataNodeType.SESSION_RESULT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
