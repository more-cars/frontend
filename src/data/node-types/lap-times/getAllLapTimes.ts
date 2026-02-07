import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeNode} from "./types/ApiLapTimeNode"
import type {LapTimeNode} from "./types/LapTimeNode"

export async function getAllLapTimes(params?: { page: number }) {
    const urlParams = {page: params?.page, sortByProperty: 'driver_name'}
    const url = getApiRequestUrl(DataNodeType.LAP_TIME, urlParams)
    const apiData: ApiLapTimeNode[] = (await requestDataFromApi(url))?.data || []
    const data: LapTimeNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
