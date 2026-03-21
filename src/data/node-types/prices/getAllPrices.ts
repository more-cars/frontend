import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiPriceNode} from "./types/ApiPriceNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {PriceNode} from "./types/PriceNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllPrices(params?: { page: number }) {
    const urlParams = {page: params?.page, sortByProperty: 'price'}
    const url = getApiRequestUrl(DataNodeType.PRICE, urlParams)
    const apiData: ApiPriceNode[] = (await requestDataFromApi(url))?.data || []
    const data: PriceNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem.attributes, apiItem.id) as PriceNode)
    })

    return data
}
