import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiMotorShowNode} from "./types/ApiMotorShowNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {MotorShowNode} from "./types/MotorShowNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllMotorShows(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.MOTOR_SHOW, params)
    const apiData: ApiMotorShowNode[] = (await requestDataFromApi(url))?.data || []
    const data: MotorShowNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as MotorShowNode)
    })

    return data
}
