import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiProgrammeEpisodeIsFollowedByEpisodeRelationship} from "./types/ApiProgrammeEpisodeIsFollowedByEpisodeRelationship"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ProgrammeEpisodeIsFollowedByEpisodeRelationship} from "./types/ProgrammeEpisodeIsFollowedByEpisodeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.PROGRAMME_EPISODE_IS_FOLLOWED_BY_EPISODE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ProgrammeEpisodeNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
