import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiMagazineNode} from "../../magazines/types/ApiMagazineNode"

export type ApiMagazineIssueBelongsToMagazineRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-magazine'
        partner_node: {
            node_type: ApiNodeType.MAGAZINE
            data: ApiMagazineNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
