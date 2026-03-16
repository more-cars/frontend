import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelNode} from "../../car-models/types/CarModelNode"

export type ProgrammeEpisodeCoversCarModelRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_COVERS_CAR_MODEL
    source_node: ProgrammeEpisodeNode
    source_node_type: DataNodeType.PROGRAMME_EPISODE
    partner_node: CarModelNode
    partner_node_type: DataNodeType.CAR_MODEL
    created_at: string
    updated_at: string
}
