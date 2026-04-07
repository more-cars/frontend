import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ApiProgrammeEpisodeHasPrimeImageRelationship} from "./types/ApiProgrammeEpisodeHasPrimeImageRelationship"
import type {ProgrammeEpisodeHasMainImageRelationship} from "./types/ProgrammeEpisodeHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getProgrammeEpisodeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/programme-episodes/${id}/has-prime-image`)) as ApiProgrammeEpisodeHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: ProgrammeEpisodeHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.PROGRAMME_EPISODE_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
