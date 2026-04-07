import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeEpisodeNode} from "./ProgrammeEpisodeNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type ProgrammeEpisodeFeaturesCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_EPISODE_FEATURES_CAR_MODEL_VARIANT
    source_node: ProgrammeEpisodeNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
