import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {ProgrammeEpisodeNode} from "../../programme-episodes/types/ProgrammeEpisodeNode"

export type CarModelVariantFeaturedInProgrammeEpisodeRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_FEATURED_IN_PROGRAMME_EPISODE
    source_node: CarModelVariantNode
    partner_node: ProgrammeEpisodeNode
    created_at: string
    updated_at: string
}
