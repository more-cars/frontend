import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiModelCarNode} from "./types/ApiModelCarNode"
import type {ModelCarNode} from "./types/ModelCarNode"

export async function getModelCarById(id: number) {
    const apiData = (await requestDataFromApi(`/model-cars/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiModelCarNode) as ModelCarNode
}
