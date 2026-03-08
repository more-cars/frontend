import type {ApiImageNode} from "../../images/types/ApiImageNode"

export type ApiRacingGameHasImageRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-image'
        partner_node: {
            node_type: 'images'
            data: ApiImageNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
