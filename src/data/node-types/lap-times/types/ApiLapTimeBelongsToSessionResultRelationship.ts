import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiSessionResultNode} from "../../session-results/types/ApiSessionResultNode"

export type ApiLapTimeBelongsToSessionResultRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-session-result'
        partner_node: {
            node_type: ApiNodeType.SESSION_RESULT
            data: ApiSessionResultNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
