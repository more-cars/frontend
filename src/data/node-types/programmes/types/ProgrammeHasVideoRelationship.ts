import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeNode} from "./ProgrammeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type ProgrammeHasVideoRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_HAS_VIDEO
    source_node: ProgrammeNode
    source_node_type: DataNodeType.PROGRAMME
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
