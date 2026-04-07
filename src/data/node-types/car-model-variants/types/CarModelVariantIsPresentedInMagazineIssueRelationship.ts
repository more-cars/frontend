import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {MagazineIssueNode} from "../../magazine-issues/types/MagazineIssueNode"

export type CarModelVariantIsPresentedInMagazineIssueRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_IS_PRESENTED_IN_MAGAZINE_ISSUE
    source_node: CarModelVariantNode
    partner_node: MagazineIssueNode
    created_at: string
    updated_at: string
}
