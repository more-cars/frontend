import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {RacingGameNode} from "../../racing-games/types/RacingGameNode"

export type CarModelVariantIsFeaturedInRacingGameRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_IS_FEATURED_IN_RACING_GAME
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: RacingGameNode
    partner_node_type: DataNodeType.RACING_GAME
    created_at: string
    updated_at: string
}
