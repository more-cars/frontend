import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {RacingGameNode} from "../../racing-games/types/RacingGameNode"

export type CarModelVariantIsFeaturedInRacingGameRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_IS_FEATURED_IN_RACING_GAME
    source_node: CarModelVariantNode
    partner_node: RacingGameNode
    created_at: string
    updated_at: string
}
