import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelVariantNode} from "./types/ApiCarModelVariantNode"
import type {CarModelVariantNode} from "./types/CarModelVariantNode"

export async function getAllCarModelVariants(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.CAR_MODEL_VARIANT, params)
    const apiData: ApiCarModelVariantNode[] = (await requestDataFromApi(url))?.data || []
    const data: CarModelVariantNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
