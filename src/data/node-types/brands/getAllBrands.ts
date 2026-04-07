import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiBrandNode} from "./types/ApiBrandNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {BrandNode} from "./types/BrandNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllBrands(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.BRAND, params)
    const apiData: ApiBrandNode[] = (await requestDataFromApi(url))?.data || []
    const data: BrandNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as BrandNode)
    })

    return data
}
