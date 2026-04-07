import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineNode} from "./MagazineNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type MagazineHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_HAS_VIDEO
    source_node: MagazineNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
