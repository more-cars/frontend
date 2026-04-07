import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type MagazineIssueHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_HAS_MAIN_IMAGE
    source_node: MagazineIssueNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
