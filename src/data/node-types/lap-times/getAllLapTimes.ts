import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeNode} from "./types/ApiLapTimeNode"
import type {LapTimeNode} from "./types/LapTimeNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllLapTimes(params?: { page: number }) {
    const urlParams = {page: params?.page, sortByProperty: 'driver_name'}
    const url = getApiRequestUrl(DataNodeType.LAP_TIME, urlParams)
    const apiData: ApiLapTimeNode[] = (await requestDataFromApi(url))?.data || []
    const data: LapTimeNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem.attributes, apiItem.id) as LapTimeNode)
    })

    return data
}
