import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ApiProgrammeEpisodeHasImageRelationship} from "./types/ApiProgrammeEpisodeHasImageRelationship"
import type {ProgrammeEpisodeHasImageRelationship} from "./types/ProgrammeEpisodeHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getProgrammeEpisodeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/programme-episodes/${id}/has-image`)).data as ApiProgrammeEpisodeHasImageRelationship[]
    const data: ProgrammeEpisodeHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.PROGRAMME_EPISODE_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
