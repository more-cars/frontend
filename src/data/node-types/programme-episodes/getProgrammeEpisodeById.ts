import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiProgrammeEpisodeNode} from "./types/ApiProgrammeEpisodeNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ProgrammeEpisodeNode} from "./types/ProgrammeEpisodeNode"

export async function getProgrammeEpisodeById(id: number) {
    const apiData = (await requestDataFromApi(`/programme-episodes/${id}`)) as ApiProgrammeEpisodeNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData.attributes, apiData.id) as ProgrammeEpisodeNode
}
