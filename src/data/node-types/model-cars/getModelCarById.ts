import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiModelCarNode} from "./types/ApiModelCarNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ModelCarNode} from "./types/ModelCarNode"

export async function getModelCarById(id: number) {
    const apiData = (await requestDataFromApi(`/model-cars/${id}`)) as ApiModelCarNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as ModelCarNode
}
