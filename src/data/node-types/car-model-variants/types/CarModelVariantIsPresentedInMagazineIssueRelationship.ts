import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type CarModelVariantIsPresentedInMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_IS_PRESENTED_IN_MAGAZINE_ISSUE
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: MagazineIssueNode
    partner_node_type: DataNodeType.MAGAZINE_ISSUE
    created_at: string
    updated_at: string
}
