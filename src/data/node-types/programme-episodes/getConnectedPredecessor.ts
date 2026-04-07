import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiProgrammeEpisodeFollowsEpisodeRelationship} from "./types/ApiProgrammeEpisodeFollowsEpisodeRelationship"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ProgrammeEpisodeFollowsEpisodeRelationship} from "./types/ProgrammeEpisodeFollowsEpisodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ProgrammeEpisodeNode} from "./types/ProgrammeEpisodeNode"

export async function getConnectedPredecessor(id: number) {
    const sourceNode = await getProgrammeEpisodeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/programme-episodes/${id}/follows-episode`)) as ApiProgrammeEpisodeFollowsEpisodeRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: ProgrammeEpisodeFollowsEpisodeRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.PROGRAMME_EPISODE_FOLLOWS_EPISODE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ProgrammeEpisodeNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
