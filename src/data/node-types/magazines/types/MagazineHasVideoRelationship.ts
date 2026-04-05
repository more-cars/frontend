import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineNode} from "./MagazineNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type MagazineHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_HAS_VIDEO
    source_node: MagazineNode
    source_node_type: DataNodeType.MAGAZINE
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
