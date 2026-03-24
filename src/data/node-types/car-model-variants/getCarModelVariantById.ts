import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelVariantNode} from "./types/ApiCarModelVariantNode"
import type {CarModelVariantNode} from "./types/CarModelVariantNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getCarModelVariantById(id: number) {
    const apiData = (await requestDataFromApi(`/car-model-variants/${id}`)) as ApiCarModelVariantNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as CarModelVariantNode
}
