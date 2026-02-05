import type {ApiSessionResultNode} from "../../session-results/types/ApiSessionResultNode"

export type ApiLapTimeBelongsToSessionResultRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-session-result'
        relationship_partner: {
            node_type: 'session result'
            data: ApiSessionResultNode['data']
        }
        created_at: string
        updated_at: string
    }
}
