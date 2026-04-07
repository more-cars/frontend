import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {PriceNode} from "../../prices/types/PriceNode"

export type CarModelVariantHasPriceRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_PRICE
    source_node: CarModelVariantNode
    partner_node: PriceNode
    created_at: string
    updated_at: string
}
