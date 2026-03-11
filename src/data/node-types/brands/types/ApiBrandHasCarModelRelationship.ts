import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiBrandHasCarModelRelationship = {
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
}
