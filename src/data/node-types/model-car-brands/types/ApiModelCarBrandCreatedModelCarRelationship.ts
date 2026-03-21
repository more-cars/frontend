import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiModelCarNode} from "../../model-cars/types/ApiModelCarNode"

export type ApiModelCarBrandCreatedModelCarRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.MODEL_CAR_BRAND_CREATED_MODEL_CAR
        partner_node: {
            node_type: ApiNodeType.MODEL_CAR
            data: ApiModelCarNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
