import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type LapTimeDocumentedInMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_DOCUMENTED_IN_MAGAZINE_ISSUE
    source_node: LapTimeNode
    partner_node: MagazineIssueNode
    created_at: string
    updated_at: string
}
