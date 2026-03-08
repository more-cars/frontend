import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {GamingPlatformNode} from "./GamingPlatformNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type GamingPlatformHasImageRelationship = {
    id: number
    name: DataRelationshipType.GAMING_PLATFORM_HAS_IMAGE
    source_node: GamingPlatformNode
    source_node_type: DataNodeType.GAMING_PLATFORM
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
