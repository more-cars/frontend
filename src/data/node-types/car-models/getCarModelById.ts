import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiCarModelNode} from "./types/ApiCarModelNode"
import type {CarModelNode} from "./types/CarModelNode"

export async function getCarModelById(id: number) {
    const apiData = (await requestDataFromApi(`/car-models/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiCarModelNode) as CarModelNode
}
