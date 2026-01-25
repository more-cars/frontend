import type {ApiCompanyNode} from "../../companies/types/ApiCompanyNode"

export type ApiBrandBelongsToCompanyRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-company'
        relationship_partner: {
            node_type: 'company'
            data: ApiCompanyNode['data']
        }
        created_at: string
        updated_at: string
    }
}
