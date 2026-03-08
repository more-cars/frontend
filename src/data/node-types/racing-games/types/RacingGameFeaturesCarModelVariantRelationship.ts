import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type RacingGameFeaturesCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_FEATURES_CAR_MODEL_VARIANT
    source_node: RacingGameNode
    source_node_type: DataNodeType.RACING_GAME
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
