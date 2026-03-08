import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type MagazineIssuePresentsCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_PRESENTS_CAR_MODEL_VARIANT
    source_node: MagazineIssueNode
    source_node_type: DataNodeType.MAGAZINE_ISSUE
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
