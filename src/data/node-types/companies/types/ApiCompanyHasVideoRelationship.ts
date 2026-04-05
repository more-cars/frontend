import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiVideoNode} from "../../videos/types/ApiVideoNode"

export type ApiCompanyHasVideoRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.COMPANY_HAS_VIDEO
        partner_node: {
            node_type: ApiNodeType.VIDEO
            data: ApiVideoNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
