import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRatingForCarModelVariantRelationship} from "./types/ApiRatingForCarModelVariantRelationship"
import {getRatingById} from "./getRatingById"
import type {RatingForCarModelVariantRelationship} from "./types/RatingForCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariant(id: number) {
    const sourceNode = await getRatingById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/ratings/${id}/for-car-model-variant`)) as ApiRatingForCarModelVariantRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RatingForCarModelVariantRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.RATING_FOR_CAR_MODEL_VARIANT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as CarModelVariantNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
