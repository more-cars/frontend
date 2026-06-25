import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiModelCarBrandNode} from "./types/ApiModelCarBrandNode"
import type {ModelCarBrandNode} from "./types/ModelCarBrandNode"

export async function getModelCarBrandById(id: number) {
    const apiData = (await requestDataFromApi(`/model-car-brands/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiModelCarBrandNode) as ModelCarBrandNode
}
