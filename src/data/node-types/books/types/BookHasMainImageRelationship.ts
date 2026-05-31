import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BookNode} from "./BookNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type BookHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.BOOK_HAS_MAIN_IMAGE
    source_node: BookNode
    source_node_type: DataNodeType.BOOK
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
