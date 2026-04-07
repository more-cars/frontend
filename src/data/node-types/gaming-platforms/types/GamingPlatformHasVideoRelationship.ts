import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {GamingPlatformNode} from "./GamingPlatformNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type GamingPlatformHasVideoRelationship = {
    id: number
    name: DataRelationshipType.GAMING_PLATFORM_HAS_VIDEO
    source_node: GamingPlatformNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
