import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBrandNode} from "./types/ApiBrandNode"
import type {BrandNode} from "./types/BrandNode"

export async function getAllBrands(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.BRAND, params)
    const apiData: ApiBrandNode[] = (await requestDataFromApi(url))?.data || []
    const data: BrandNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
