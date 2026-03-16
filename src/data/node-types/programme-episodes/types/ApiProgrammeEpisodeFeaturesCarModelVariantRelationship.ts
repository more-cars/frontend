import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelVariantNode} from "../../car-model-variants/types/ApiCarModelVariantNode"

export type ApiProgrammeEpisodeFeaturesCarModelVariantRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.PROGRAMME_EPISODE_FEATURES_CAR_MODEL_VARIANT
        partner_node: {
            node_type: ApiNodeType.CAR_MODEL_VARIANT
            data: ApiCarModelVariantNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
