import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {ProgrammeNode} from "../../programmes/types/ProgrammeNode"

export type ProgrammeEpisodeBelongsToProgrammeRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_BELONGS_TO_PROGRAMME
    source_node: ProgrammeEpisodeNode
    partner_node: ProgrammeNode
    created_at: string
    updated_at: string
}
