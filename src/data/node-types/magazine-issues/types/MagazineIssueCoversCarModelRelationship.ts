import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {CarModelNode} from "../../car-models/types/CarModelNode"

export type MagazineIssueCoversCarModelRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_COVERS_CAR_MODEL
    source_node: MagazineIssueNode
    partner_node: CarModelNode
    created_at: string
    updated_at: string
}
