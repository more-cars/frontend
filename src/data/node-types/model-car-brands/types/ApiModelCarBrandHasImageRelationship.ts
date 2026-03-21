import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiImageNode} from "../../images/types/ApiImageNode"

export type ApiModelCarBrandHasImageRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.MODEL_CAR_BRAND_HAS_IMAGE
        partner_node: {
            node_type: ApiNodeType.IMAGE
            data: ApiImageNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
