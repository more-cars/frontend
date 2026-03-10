import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiLapTimeNode} from "../../lap-times/types/ApiLapTimeNode"

export type ApiSessionResultHasLapTimeRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-lap-time'
        partner_node: {
            node_type: ApiNodeType.LAP_TIME
            data: ApiLapTimeNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
