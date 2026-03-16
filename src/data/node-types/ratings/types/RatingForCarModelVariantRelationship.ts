import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RatingNode} from "./RatingNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type RatingForCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.RATING_FOR_CAR_MODEL_VARIANT
    source_node: RatingNode
    source_node_type: DataNodeType.RATING
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
