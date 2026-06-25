import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiCarModelVariantNode} from "./types/ApiCarModelVariantNode"
import type {CarModelVariantNode} from "./types/CarModelVariantNode"

export async function getCarModelVariantById(id: number) {
    const apiData = (await requestDataFromApi(`/car-model-variants/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiCarModelVariantNode) as CarModelVariantNode
}
