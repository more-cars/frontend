import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiProgrammeNode} from "./types/ApiProgrammeNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ProgrammeNode} from "./types/ProgrammeNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllProgrammes(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.PROGRAMME, params)
    const apiData: ApiProgrammeNode[] = (await requestDataFromApi(url))?.data || []
    const data: ProgrammeNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as ProgrammeNode)
    })

    return data
}
