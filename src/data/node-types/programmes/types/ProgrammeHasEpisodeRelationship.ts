import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeNode} from "./ProgrammeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ProgrammeEpisodeNode} from "../../programme-episodes/types/ProgrammeEpisodeNode"

export type ProgrammeHasEpisodeRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_HAS_EPISODE
    source_node: ProgrammeNode
    source_node_type: DataNodeType.PROGRAMME
    partner_node: ProgrammeEpisodeNode
    partner_node_type: DataNodeType.PROGRAMME_EPISODE
    created_at: string
    updated_at: string
}
