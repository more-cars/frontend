import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiCarModelVariantNode} from "./types/ApiCarModelVariantNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {CarModelVariantNode} from "./types/CarModelVariantNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllCarModelVariants(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.CAR_MODEL_VARIANT, params)
    const apiData: ApiCarModelVariantNode[] = (await requestDataFromApi(url))?.data || []
    const data: CarModelVariantNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as CarModelVariantNode)
    })

    return data
}
