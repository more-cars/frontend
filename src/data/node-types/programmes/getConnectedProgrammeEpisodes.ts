import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeById} from "./getProgrammeById"
import type {ApiProgrammeHasEpisodeRelationship} from "./types/ApiProgrammeHasEpisodeRelationship"
import type {ProgrammeHasEpisodeRelationship} from "./types/ProgrammeHasEpisodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ProgrammeEpisodeNode} from "../programme-episodes/types/ProgrammeEpisodeNode"

export async function getConnectedProgrammeEpisodes(id: number) {
    const sourceNode = await getProgrammeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/programmes/${id}/has-episode`)).data as ApiProgrammeHasEpisodeRelationship[]
    const data: ProgrammeHasEpisodeRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.PROGRAMME_HAS_EPISODE,
            source_node: sourceNode,
            source_node_type: DataNodeType.PROGRAMME,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ProgrammeEpisodeNode,
            partner_node_type: DataNodeType.PROGRAMME_EPISODE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
