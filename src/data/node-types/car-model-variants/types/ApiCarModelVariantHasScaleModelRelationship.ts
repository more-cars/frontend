import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiModelCarNode} from "../../model-cars/types/ApiModelCarNode"

export type ApiCarModelVariantHasScaleModelRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.CAR_MODEL_VARIANT_HAS_SCALE_MODEL
        partner_node: {
            node_type: ApiNodeType.MODEL_CAR
            data: ApiModelCarNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
