import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiMotorShowNode} from "./types/ApiMotorShowNode"
import type {MotorShowNode} from "./types/MotorShowNode"

export async function getMotorShowById(id: number) {
    const apiData = (await requestDataFromApi(`/motor-shows/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiMotorShowNode) as MotorShowNode
}
