import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelVariantNode} from "../../car-model-variants/types/ApiCarModelVariantNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiCarModelHasVariantRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.CAR_MODEL_HAS_VARIANT
        partner_node: {
            node_type: ApiNodeType.CAR_MODEL_VARIANT
            data: ApiCarModelVariantNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
