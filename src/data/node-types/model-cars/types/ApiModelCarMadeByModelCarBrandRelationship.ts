import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiModelCarBrandNode} from "../../model-car-brands/types/ApiModelCarBrandNode"

export type ApiModelCarMadeByModelCarBrandRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.MODEL_CAR_MADE_BY_MODEL_CAR_BRAND
        partner_node: {
            node_type: ApiNodeType.MODEL_CAR_BRAND
            data: ApiModelCarBrandNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
