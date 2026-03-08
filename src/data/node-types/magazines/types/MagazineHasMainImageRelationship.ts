import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineNode} from "./MagazineNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type MagazineHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_HAS_MAIN_IMAGE
    source_node: MagazineNode
    source_node_type: DataNodeType.MAGAZINE
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
