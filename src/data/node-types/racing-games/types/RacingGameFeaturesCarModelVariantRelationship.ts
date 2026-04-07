import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type RacingGameFeaturesCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_FEATURES_CAR_MODEL_VARIANT
    source_node: RacingGameNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
