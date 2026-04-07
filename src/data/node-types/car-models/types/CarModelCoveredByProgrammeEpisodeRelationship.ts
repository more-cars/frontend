import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {ProgrammeEpisodeNode} from "../../programme-episodes/types/ProgrammeEpisodeNode"

export type CarModelCoveredByProgrammeEpisodeRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_COVERED_BY_PROGRAMME_EPISODE
    source_node: CarModelNode
    partner_node: ProgrammeEpisodeNode
    created_at: string
    updated_at: string
}
