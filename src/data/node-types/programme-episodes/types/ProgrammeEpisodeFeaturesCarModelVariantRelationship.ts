import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type ProgrammeEpisodeFeaturesCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_FEATURES_CAR_MODEL_VARIANT
    source_node: ProgrammeEpisodeNode
    source_node_type: DataNodeType.PROGRAMME_EPISODE
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
