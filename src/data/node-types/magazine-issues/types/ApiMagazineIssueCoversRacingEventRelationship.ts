import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiRacingEventNode} from "../../racing-events/types/ApiRacingEventNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiMagazineIssueCoversRacingEventRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.MAGAZINE_ISSUE_COVERS_RACING_EVENT
        partner_node: {
            node_type: ApiNodeType.RACING_EVENT
            data: ApiRacingEventNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
