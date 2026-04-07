import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingGameById} from "./getRacingGameById"
import type {ApiRacingGameFeaturesCarModelVariantRelationship} from "./types/ApiRacingGameFeaturesCarModelVariantRelationship"
import type {RacingGameFeaturesCarModelVariantRelationship} from "./types/RacingGameFeaturesCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariants(id: number) {
    const sourceNode = await getRacingGameById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-games/${id}/features-car-model-variant`)).data as ApiRacingGameFeaturesCarModelVariantRelationship[]
    const data: RacingGameFeaturesCarModelVariantRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACING_GAME_FEATURES_CAR_MODEL_VARIANT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as CarModelVariantNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
