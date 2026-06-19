import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantAchievedSessionResultRelationship} from "./types/ApiCarModelVariantAchievedSessionResultRelationship"
import type {CarModelVariantAchievedSessionResultRelationship} from "./types/CarModelVariantAchievedSessionResultRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {SessionResultNode} from "../session-results/types/SessionResultNode"

export async function getConnectedSessionResults(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/achieved-session-result`)) as ApiCarModelVariantAchievedSessionResultRelationship
    const data: CarModelVariantAchievedSessionResultRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_SESSION_RESULT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as SessionResultNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
