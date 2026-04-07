import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeNode} from "./ProgrammeNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type ProgrammeHasVideoRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_HAS_VIDEO
    source_node: ProgrammeNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
