import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import type {ApiCarModelCoveredByProgrammeEpisodeRelationship} from "./types/ApiCarModelCoveredByProgrammeEpisodeRelationship"
import type {CarModelCoveredByProgrammeEpisodeRelationship} from "./types/CarModelCoveredByProgrammeEpisodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
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
            id,
            name: DataRelationshipType.CAR_MODEL_COVERED_BY_PROGRAMME_EPISODE,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as ProgrammeEpisodeNode,
            partner_node_type: DataNodeType.PROGRAMME_EPISODE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
