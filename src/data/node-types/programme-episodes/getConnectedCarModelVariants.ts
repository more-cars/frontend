import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ApiProgrammeEpisodeFeaturesCarModelVariantRelationship} from "./types/ApiProgrammeEpisodeFeaturesCarModelVariantRelationship"
import type {ProgrammeEpisodeFeaturesCarModelVariantRelationship} from "./types/ProgrammeEpisodeFeaturesCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
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
            id,
            name: DataRelationshipType.PROGRAMME_EPISODE_FEATURES_CAR_MODEL_VARIANT,
            source_node: sourceNode,
            source_node_type: DataNodeType.PROGRAMME_EPISODE,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as CarModelVariantNode,
            partner_node_type: DataNodeType.CAR_MODEL_VARIANT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
