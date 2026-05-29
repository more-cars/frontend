import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiCarModelBelongsToBrandRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.CAR_MODEL
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.CAR_MODEL_BELONGS_TO_BRAND
            partner_node: {
                node_type: ApiNodeType.BRAND
                data: ApiBrandNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
