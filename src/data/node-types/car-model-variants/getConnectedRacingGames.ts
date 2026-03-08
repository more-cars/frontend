import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantIsFeaturedInRacingGameRelationship} from "./types/ApiCarModelVariantIsFeaturedInRacingGameRelationship"
import type {CarModelVariantIsFeaturedInRacingGameRelationship} from "./types/CarModelVariantIsFeaturedInRacingGameRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingGameNode} from "../racing-games/types/RacingGameNode"

export async function getConnectedRacingGames(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/is-featured-in-racing-game`)).data as ApiCarModelVariantIsFeaturedInRacingGameRelationship[]
    const data: CarModelVariantIsFeaturedInRacingGameRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_IS_FEATURED_IN_RACING_GAME,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL_VARIANT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as RacingGameNode,
            partner_node_type: DataNodeType.RACING_GAME,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
