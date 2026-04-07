import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ApiProgrammeEpisodeFeaturesCarModelVariantRelationship} from "./types/ApiProgrammeEpisodeFeaturesCarModelVariantRelationship"
import type {ProgrammeEpisodeFeaturesCarModelVariantRelationship} from "./types/ProgrammeEpisodeFeaturesCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariants(id: number) {
    const sourceNode = await getProgrammeEpisodeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/programme-episodes/${id}/features-car-model-variant`)).data as ApiProgrammeEpisodeFeaturesCarModelVariantRelationship[]
    const data: ProgrammeEpisodeFeaturesCarModelVariantRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.PROGRAMME_EPISODE_FEATURES_CAR_MODEL_VARIANT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as CarModelVariantNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
