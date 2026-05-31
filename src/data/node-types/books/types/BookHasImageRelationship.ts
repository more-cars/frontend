import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BookNode} from "./BookNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type BookHasImageRelationship = {
    id: number
    name: DataRelationshipType.BOOK_HAS_IMAGE
    source_node: BookNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
