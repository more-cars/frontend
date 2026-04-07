import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type CarModelCoveredByMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_COVERED_BY_MAGAZINE_ISSUE
    source_node: CarModelNode
    partner_node: MagazineIssueNode
    created_at: string
    updated_at: string
}
