import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ProgrammeEpisodeNode} from "../../programme-episodes/types/ProgrammeEpisodeNode"

export type CarModelCoveredByProgrammeEpisodeRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_COVERED_BY_PROGRAMME_EPISODE
    source_node: CarModelNode
    source_node_type: DataNodeType.CAR_MODEL
    partner_node: ProgrammeEpisodeNode
    partner_node_type: DataNodeType.PROGRAMME_EPISODE
    created_at: string
    updated_at: string
}
