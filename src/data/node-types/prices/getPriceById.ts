import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiPriceNode} from "./types/ApiPriceNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {PriceNode} from "./types/PriceNode"

export async function getPriceById(id: number) {
    const apiData = (await requestDataFromApi(`/prices/${id}`)) as ApiPriceNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as PriceNode
}
