import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CompanyNode} from "./CompanyNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type CompanyHasVideoRelationship = {
    id: number
    name: DataRelationshipType.COMPANY_HAS_VIDEO
    source_node: CompanyNode
    source_node_type: DataNodeType.COMPANY
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
