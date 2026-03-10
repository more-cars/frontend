import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingEventNode} from "../../racing-events/types/ApiRacingEventNode"

export type ApiMagazineIssueCoversRacingEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'covers-racing-event'
        partner_node: {
            node_type: ApiNodeType.RACING_EVENT
            data: ApiRacingEventNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
