import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"

export type ApiProgrammeEpisodeCoversCarModelRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.PROGRAMME_EPISODE_COVERS_CAR_MODEL
        partner_node: {
            node_type: ApiNodeType.CAR_MODEL
            data: ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
