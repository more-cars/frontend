import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiProgrammeNode} from "../../programmes/types/ApiProgrammeNode"

export type ApiProgrammeEpisodeBelongsToProgrammeRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.PROGRAMME_EPISODE_BELONGS_TO_PROGRAMME
        partner_node: {
            node_type: ApiNodeType.PROGRAMME
            data: ApiProgrammeNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
