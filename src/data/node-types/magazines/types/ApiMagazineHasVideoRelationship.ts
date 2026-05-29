import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiVideoNode} from "../../videos/types/ApiVideoNode"

export type ApiMagazineHasVideoRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.MAGAZINE
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.MAGAZINE_HAS_VIDEO
            partner_node: {
                node_type: ApiNodeType.VIDEO
                data: ApiVideoNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
