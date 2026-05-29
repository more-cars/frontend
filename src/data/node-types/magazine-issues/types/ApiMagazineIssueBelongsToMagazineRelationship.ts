import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiMagazineNode} from "../../magazines/types/ApiMagazineNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiMagazineIssueBelongsToMagazineRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.MAGAZINE_ISSUE
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.MAGAZINE_ISSUE_BELONGS_TO_MAGAZINE
            partner_node: {
                node_type: ApiNodeType.MAGAZINE
                data: ApiMagazineNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
