import {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCompanyNode} from "../../companies/types/ApiCompanyNode"

export type ApiBrandBelongsToCompanyRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-company'
        partner_node: {
            node_type: ApiNodeType.COMPANY
            data: ApiCompanyNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
