import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {PriceNode} from "./PriceNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type PriceForCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.PRICE_FOR_CAR_MODEL_VARIANT
    source_node: PriceNode
    source_node_type: DataNodeType.PRICE
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
