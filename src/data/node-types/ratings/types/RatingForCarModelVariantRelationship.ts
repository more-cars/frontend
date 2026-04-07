import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RatingNode} from "./RatingNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type RatingForCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.RATING_FOR_CAR_MODEL_VARIANT
    source_node: RatingNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
