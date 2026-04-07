import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CompanyNode} from "./CompanyNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type CompanyHasVideoRelationship = {
    id: number
    name: DataRelationshipType.COMPANY_HAS_VIDEO
    source_node: CompanyNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
