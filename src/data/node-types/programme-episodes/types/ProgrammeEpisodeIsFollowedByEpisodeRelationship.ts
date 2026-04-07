import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"

export type ProgrammeEpisodeIsFollowedByEpisodeRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_IS_FOLLOWED_BY_EPISODE
    source_node: ProgrammeEpisodeNode
    partner_node: ProgrammeEpisodeNode
    created_at: string
    updated_at: string
}
