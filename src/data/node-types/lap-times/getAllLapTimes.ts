import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeNode} from "./types/ApiLapTimeNode"
import type {LapTimeNode} from "./types/LapTimeNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllLapTimes(params?: DataSearchParams) {
    if (!params?.sortByProperty) {
        params = {sortByProperty: 'driver_name'}
    }

    const url = getApiRequestUrl(DataNodeType.LAP_TIME, params)
    const apiData: ApiLapTimeNode[] = (await requestDataFromApi(url))?.data || []
    const data: LapTimeNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as LapTimeNode)
    })

    return data
}
