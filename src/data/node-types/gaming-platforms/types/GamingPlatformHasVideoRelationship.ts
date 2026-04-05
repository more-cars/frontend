import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {GamingPlatformNode} from "./GamingPlatformNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type GamingPlatformHasVideoRelationship = {
    id: number
    name: DataRelationshipType.GAMING_PLATFORM_HAS_VIDEO
    source_node: GamingPlatformNode
    source_node_type: DataNodeType.GAMING_PLATFORM
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
