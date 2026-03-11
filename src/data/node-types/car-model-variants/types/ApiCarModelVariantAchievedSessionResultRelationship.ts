import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiSessionResultNode} from "../../session-results/types/ApiSessionResultNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiCarModelVariantAchievedSessionResultRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_SESSION_RESULT
        partner_node: {
            node_type: ApiNodeType.SESSION_RESULT
            data: ApiSessionResultNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
