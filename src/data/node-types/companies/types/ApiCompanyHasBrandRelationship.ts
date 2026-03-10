import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"

export type ApiCompanyHasBrandRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-brand'
        partner_node: {
            node_type: ApiNodeType.BRAND
            data: ApiBrandNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
