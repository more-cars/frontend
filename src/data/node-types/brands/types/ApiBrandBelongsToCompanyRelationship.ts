import {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCompanyNode} from "../../companies/types/ApiCompanyNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiBrandBelongsToCompanyRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.BRAND_BELONGS_TO_COMPANY
        partner_node: {
            node_type: ApiNodeType.COMPANY
            data: ApiCompanyNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
