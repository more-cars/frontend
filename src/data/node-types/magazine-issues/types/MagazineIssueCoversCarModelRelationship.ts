import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MagazineIssueNode} from "./MagazineIssueNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelNode} from "../../car-models/types/CarModelNode"

export type MagazineIssueCoversCarModelRelationship = {
    id: number
    name: DataRelationshipType.MAGAZINE_ISSUE_COVERS_CAR_MODEL
    source_node: MagazineIssueNode
    source_node_type: DataNodeType.MAGAZINE_ISSUE
    partner_node: CarModelNode
    partner_node_type: DataNodeType.CAR_MODEL
    created_at: string
    updated_at: string
}
