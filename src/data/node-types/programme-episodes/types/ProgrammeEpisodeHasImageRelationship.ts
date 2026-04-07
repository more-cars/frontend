import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type ProgrammeEpisodeHasImageRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_HAS_IMAGE
    source_node: ProgrammeEpisodeNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
