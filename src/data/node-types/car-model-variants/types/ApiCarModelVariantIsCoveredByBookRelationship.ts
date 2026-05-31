import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiBookNode} from "../../books/types/ApiBookNode"

export type ApiCarModelVariantIsCoveredByBookRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.BOOK
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.CAR_MODEL_VARIANT_IS_COVERED_BY_BOOK
            partner_node: {
                node_type: ApiNodeType.BOOK
                data: ApiBookNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
