import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiProgrammeEpisodeIsFollowedByEpisodeRelationship} from "./types/ApiProgrammeEpisodeIsFollowedByEpisodeRelationship"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ProgrammeEpisodeIsFollowedByEpisodeRelationship} from "./types/ProgrammeEpisodeIsFollowedByEpisodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ProgrammeEpisodeNode} from "../programme-episodes/types/ProgrammeEpisodeNode"

export async function getConnectedSuccessor(id: number) {
    const sourceNode = await getProgrammeEpisodeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/programme-episodes/${id}/is-followed-by-episode`)) as ApiProgrammeEpisodeIsFollowedByEpisodeRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: ProgrammeEpisodeIsFollowedByEpisodeRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.PROGRAMME_EPISODE_IS_FOLLOWED_BY_EPISODE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ProgrammeEpisodeNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
