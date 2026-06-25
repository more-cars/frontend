import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiPriceNode} from "./types/ApiPriceNode"
import type {PriceNode} from "./types/PriceNode"

export async function getPriceById(id: number) {
    const apiData = (await requestDataFromApi(`/prices/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiPriceNode) as PriceNode
}
