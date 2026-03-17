import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ProgrammeEpisodeNode} from "../../programme-episodes/types/ProgrammeEpisodeNode"

export type CarModelVariantFeaturedInProgrammeEpisodeRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_FEATURED_IN_PROGRAMME_EPISODE
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: ProgrammeEpisodeNode
    partner_node_type: DataNodeType.PROGRAMME_EPISODE
    created_at: string
    updated_at: string
}
