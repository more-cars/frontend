import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiProgrammeEpisodeNode} from "../../programme-episodes/types/ApiProgrammeEpisodeNode"

export type ApiProgrammeEpisodeFollowsEpisodeRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.PROGRAMME_EPISODE_FOLLOWS_EPISODE
        partner_node: {
            node_type: ApiNodeType.PROGRAMME_EPISODE
            data: ApiProgrammeEpisodeNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
