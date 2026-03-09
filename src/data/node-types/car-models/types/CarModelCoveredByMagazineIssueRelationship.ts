import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type CarModelCoveredByMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_COVERED_BY_MAGAZINE_ISSUE
    source_node: CarModelNode
    source_node_type: DataNodeType.CAR_MODEL
    partner_node: MagazineIssueNode
    partner_node_type: DataNodeType.MAGAZINE_ISSUE
    created_at: string
    updated_at: string
}
