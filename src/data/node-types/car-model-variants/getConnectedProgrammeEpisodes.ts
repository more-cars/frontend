import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantFeaturedInProgrammeEpisodeRelationship} from "./types/ApiCarModelVariantFeaturedInProgrammeEpisodeRelationship"
import type {CarModelVariantFeaturedInProgrammeEpisodeRelationship} from "./types/CarModelVariantFeaturedInProgrammeEpisodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ProgrammeEpisodeNode} from "../programme-episodes/types/ProgrammeEpisodeNode"

export async function getConnectedProgrammeEpisodes(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/featured-in-programme-episode`)).data as ApiCarModelVariantFeaturedInProgrammeEpisodeRelationship[]
    const data: CarModelVariantFeaturedInProgrammeEpisodeRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_FEATURED_IN_PROGRAMME_EPISODE,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL_VARIANT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ProgrammeEpisodeNode,
            partner_node_type: DataNodeType.PROGRAMME_EPISODE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
