import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiSessionResultNode} from "../../session-results/types/ApiSessionResultNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiLapTimeBelongsToSessionResultRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.LAP_TIME_BELONGS_TO_SESSION_RESULT
        partner_node: {
            node_type: ApiNodeType.SESSION_RESULT
            data: ApiSessionResultNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
