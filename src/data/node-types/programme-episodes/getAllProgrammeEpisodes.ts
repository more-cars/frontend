import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiProgrammeEpisodeNode} from "./types/ApiProgrammeEpisodeNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ProgrammeEpisodeNode} from "./types/ProgrammeEpisodeNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllProgrammeEpisodes(params?: { page: number }) {
    const urlParams = {page: params?.page, sortByProperty: 'title'}
    const url = getApiRequestUrl(DataNodeType.PROGRAMME_EPISODE, urlParams)
    const apiData: ApiProgrammeEpisodeNode[] = (await requestDataFromApi(url))?.data || []
    const data: ProgrammeEpisodeNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as ProgrammeEpisodeNode)
    })

    return data
}
