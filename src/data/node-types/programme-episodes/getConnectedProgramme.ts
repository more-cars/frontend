import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiProgrammeEpisodeBelongsToProgrammeRelationship} from "./types/ApiProgrammeEpisodeBelongsToProgrammeRelationship"
import {getProgrammeEpisodeById} from "./getProgrammeEpisodeById"
import type {ProgrammeEpisodeBelongsToProgrammeRelationship} from "./types/ProgrammeEpisodeBelongsToProgrammeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ProgrammeNode} from "../programmes/types/ProgrammeNode"

export async function getConnectedProgramme(id: number) {
    const sourceNode = await getProgrammeEpisodeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/programme-episodes/${id}/belongs-to-programme`)) as ApiProgrammeEpisodeBelongsToProgrammeRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: ProgrammeEpisodeBelongsToProgrammeRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.PROGRAMME_EPISODE_BELONGS_TO_PROGRAMME,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ProgrammeNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
