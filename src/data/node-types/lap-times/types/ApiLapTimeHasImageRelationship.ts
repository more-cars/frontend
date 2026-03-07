import type {ApiImageNode} from "../../images/types/ApiImageNode"

export type ApiLapTimeHasImageRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-image'
        partner_node: {
            node_type: 'image'
            data: ApiImageNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
