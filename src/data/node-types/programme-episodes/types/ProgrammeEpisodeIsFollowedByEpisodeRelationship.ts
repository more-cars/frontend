import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {DataNodeType} from "../../../types/DataNodeType"

export type ProgrammeEpisodeIsFollowedByEpisodeRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_IS_FOLLOWED_BY_EPISODE
    source_node: ProgrammeEpisodeNode
    source_node_type: DataNodeType.PROGRAMME_EPISODE
    partner_node: ProgrammeEpisodeNode
    partner_node_type: DataNodeType.PROGRAMME_EPISODE
    created_at: string
    updated_at: string
}
