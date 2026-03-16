import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ProgrammeNode} from "../../programmes/types/ProgrammeNode"

export type ProgrammeEpisodeBelongsToProgrammeRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_BELONGS_TO_PROGRAMME
    source_node: ProgrammeEpisodeNode
    source_node_type: DataNodeType.PROGRAMME_EPISODE
    partner_node: ProgrammeNode
    partner_node_type: DataNodeType.PROGRAMME
    created_at: string
    updated_at: string
}
