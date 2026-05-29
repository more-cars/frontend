import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiProgrammeEpisodeNode} from "../../programme-episodes/types/ApiProgrammeEpisodeNode"

export type ApiProgrammeHasEpisodeRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.PROGRAMME
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.PROGRAMME_HAS_EPISODE
            partner_node: {
                node_type: ApiNodeType.PROGRAMME_EPISODE
                data: ApiProgrammeEpisodeNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
