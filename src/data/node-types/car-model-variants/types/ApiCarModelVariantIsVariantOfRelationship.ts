import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiCarModelVariantIsVariantOfRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.CAR_MODEL_VARIANT_IS_VARIANT_OF
        partner_node: {
            node_type: ApiNodeType.CAR_MODEL
            data: ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
