import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiVideoNode} from "../../videos/types/ApiVideoNode"

export type ApiModelCarBrandHasVideoRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.MODEL_CAR_BRAND_HAS_VIDEO
        partner_node: {
            node_type: ApiNodeType.VIDEO
            data: ApiVideoNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
