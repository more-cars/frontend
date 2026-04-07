import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiMagazineNode} from "./types/ApiMagazineNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {MagazineNode} from "./types/MagazineNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllMagazines(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.MAGAZINE, params)
    const apiData: ApiMagazineNode[] = (await requestDataFromApi(url))?.data || []
    const data: MagazineNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as MagazineNode)
    })

    return data
}
