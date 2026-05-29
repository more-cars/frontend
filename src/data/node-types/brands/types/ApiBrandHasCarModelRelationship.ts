import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiBrandHasCarModelRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.BRAND
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.BRAND_HAS_CAR_MODEL
            partner_node: {
                node_type: ApiNodeType.CAR_MODEL
                data: ApiCarModelNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
