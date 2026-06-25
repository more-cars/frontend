import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiProgrammeEpisodeNode} from "./types/ApiProgrammeEpisodeNode"
import type {ProgrammeEpisodeNode} from "./types/ProgrammeEpisodeNode"

export async function getProgrammeEpisodeById(id: number) {
    const apiData = (await requestDataFromApi(`/programme-episodes/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiProgrammeEpisodeNode) as ProgrammeEpisodeNode
}
