import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {GamingPlatformNode} from "./GamingPlatformNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type GamingPlatformHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.GAMING_PLATFORM_HAS_MAIN_IMAGE
    source_node: GamingPlatformNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
