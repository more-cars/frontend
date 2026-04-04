import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiVideoNode} from "./ApiVideoNode"

export type ApiVideoBelongsToNodeRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.VIDEO_BELONGS_TO_NODE
        start_node: {
            node_type: ApiNodeType.VIDEO
            data: ApiVideoNode['attributes']
        }
        partner_node: {
            node_type: ApiNodeType
            data: {
                [key: string]: string | number | boolean | null
                created_at: string
                updated_at: string
            }
        }
        created_at: string
        updated_at: string
    }
}
