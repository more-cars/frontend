import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiProgrammeEpisodeNode} from "../../programme-episodes/types/ApiProgrammeEpisodeNode"

export type ApiCarModelCoveredByProgrammeEpisodeRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.CAR_MODEL
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.CAR_MODEL_COVERED_BY_PROGRAMME_EPISODE
            partner_node: {
                node_type: ApiNodeType.PROGRAMME_EPISODE
                data: ApiProgrammeEpisodeNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
