import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {PriceNode} from "./PriceNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type PriceForCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.PRICE_FOR_CAR_MODEL_VARIANT
    source_node: PriceNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
