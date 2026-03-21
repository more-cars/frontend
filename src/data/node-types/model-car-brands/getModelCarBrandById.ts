import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiModelCarBrandNode} from "./types/ApiModelCarBrandNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ModelCarBrandNode} from "./types/ModelCarBrandNode"

export async function getModelCarBrandById(id: number) {
    const apiData = (await requestDataFromApi(`/model-car-brands/${id}`)) as ApiModelCarBrandNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData.attributes, apiData.id) as ModelCarBrandNode
}
