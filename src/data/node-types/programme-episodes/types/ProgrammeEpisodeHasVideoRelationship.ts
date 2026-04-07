import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type ProgrammeEpisodeHasVideoRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_HAS_VIDEO
    source_node: ProgrammeEpisodeNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
