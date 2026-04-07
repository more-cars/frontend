import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeNode} from "./ProgrammeNode"
import type {ProgrammeEpisodeNode} from "../../programme-episodes/types/ProgrammeEpisodeNode"

export type ProgrammeHasEpisodeRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_HAS_EPISODE
    source_node: ProgrammeNode
    partner_node: ProgrammeEpisodeNode
    created_at: string
    updated_at: string
}
