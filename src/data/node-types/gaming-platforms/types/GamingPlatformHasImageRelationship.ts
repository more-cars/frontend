import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {GamingPlatformNode} from "./GamingPlatformNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type GamingPlatformHasImageRelationship = {
    id: number
    name: DataRelationshipType.GAMING_PLATFORM_HAS_IMAGE
    source_node: GamingPlatformNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
