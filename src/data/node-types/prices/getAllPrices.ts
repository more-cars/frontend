import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiPriceNode} from "./types/ApiPriceNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {PriceNode} from "./types/PriceNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllPrices(params: DataSearchParams = {}) {
    params.sortByProperty ??= 'price'

    const url = getApiRequestUrl(DataNodeType.PRICE, params)
    const apiData: ApiPriceNode[] = (await requestDataFromApi(url))?.data || []
    const data: PriceNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as PriceNode)
    })

    return data
}
