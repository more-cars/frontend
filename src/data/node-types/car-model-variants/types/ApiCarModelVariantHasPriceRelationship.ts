import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiPriceNode} from "../../prices/types/ApiPriceNode"

export type ApiCarModelVariantHasPriceRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.CAR_MODEL_VARIANT
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.CAR_MODEL_VARIANT_HAS_PRICE
            partner_node: {
                node_type: ApiNodeType.PRICE
                data: ApiPriceNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
