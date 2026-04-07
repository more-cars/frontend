import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import type {ApiCarModelCoveredByProgrammeEpisodeRelationship} from "./types/ApiCarModelCoveredByProgrammeEpisodeRelationship"
import type {CarModelCoveredByProgrammeEpisodeRelationship} from "./types/CarModelCoveredByProgrammeEpisodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ProgrammeEpisodeNode} from "../programme-episodes/types/ProgrammeEpisodeNode"

export async function getConnectedProgrammeEpisodes(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/covered-by-programme-episode`)).data as ApiCarModelCoveredByProgrammeEpisodeRelationship[]
    const data: CarModelCoveredByProgrammeEpisodeRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.CAR_MODEL_COVERED_BY_PROGRAMME_EPISODE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ProgrammeEpisodeNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
