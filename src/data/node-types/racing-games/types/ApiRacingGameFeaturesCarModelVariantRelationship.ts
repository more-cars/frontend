import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelVariantNode} from "../../car-model-variants/types/ApiCarModelVariantNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiRacingGameFeaturesCarModelVariantRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.RACING_GAME_FEATURES_CAR_MODEL_VARIANT
        partner_node: {
            node_type: ApiNodeType.CAR_MODEL_VARIANT
            data: ApiCarModelVariantNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
