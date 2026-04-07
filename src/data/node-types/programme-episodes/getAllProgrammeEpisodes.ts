import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiProgrammeEpisodeNode} from "./types/ApiProgrammeEpisodeNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ProgrammeEpisodeNode} from "./types/ProgrammeEpisodeNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllProgrammeEpisodes(params?: DataSearchParams) {
    const defaultParams: DataSearchParams = {sortByProperty: 'title'}
    params = Object.assign({}, defaultParams, params)
    const url = getApiRequestUrl(DataNodeType.PROGRAMME_EPISODE, params)
    const apiData: ApiProgrammeEpisodeNode[] = (await requestDataFromApi(url))?.data || []
    const data: ProgrammeEpisodeNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as ProgrammeEpisodeNode)
    })

    return data
}
