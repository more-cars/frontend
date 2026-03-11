import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiCompanyHasBrandRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.COMPANY_HAS_BRAND
        partner_node: {
            node_type: ApiNodeType.BRAND
            data: ApiBrandNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
