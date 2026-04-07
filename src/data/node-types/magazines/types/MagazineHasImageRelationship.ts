import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineNode} from "./MagazineNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type MagazineHasImageRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_HAS_IMAGE
    source_node: MagazineNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
