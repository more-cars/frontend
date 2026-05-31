import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {LapTimeNode} from "../../lap-times/types/LapTimeNode"

export type MagazineIssueDocumentsLapTimeRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_DOCUMENTS_LAP_TIME
    source_node: MagazineIssueNode
    partner_node: LapTimeNode
    created_at: string
    updated_at: string
}
