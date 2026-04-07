import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ApiProgrammeEpisodeCoversCarModelRelationship} from "./types/ApiProgrammeEpisodeCoversCarModelRelationship"
import type {ProgrammeEpisodeCoversCarModelRelationship} from "./types/ProgrammeEpisodeCoversCarModelRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelNode} from "../car-models/types/CarModelNode"

export async function getConnectedCarModels(id: number) {
    const sourceNode = await getProgrammeEpisodeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/programme-episodes/${id}/covers-car-model`)).data as ApiProgrammeEpisodeCoversCarModelRelationship[]
    const data: ProgrammeEpisodeCoversCarModelRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.PROGRAMME_EPISODE_COVERS_CAR_MODEL,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as CarModelNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
