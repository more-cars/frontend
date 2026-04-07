import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type MagazineIssuePresentsCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_PRESENTS_CAR_MODEL_VARIANT
    source_node: MagazineIssueNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
