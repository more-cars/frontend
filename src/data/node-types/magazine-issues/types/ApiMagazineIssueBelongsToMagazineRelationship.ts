import type {ApiMagazineNode} from "../../magazines/types/ApiMagazineNode"

export type ApiMagazineIssueBelongsToMagazineRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-magazine'
        partner_node: {
            node_type: 'magazines'
            data: ApiMagazineNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
