import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {CarModelNode} from "../../car-models/types/CarModelNode"

export type ProgrammeEpisodeCoversCarModelRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_COVERS_CAR_MODEL
    source_node: ProgrammeEpisodeNode
    partner_node: CarModelNode
    created_at: string
    updated_at: string
}
