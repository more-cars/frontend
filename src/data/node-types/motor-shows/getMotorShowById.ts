import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMotorShowNode} from "./types/ApiMotorShowNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {MotorShowNode} from "./types/MotorShowNode"

export async function getMotorShowById(id: number) {
    const apiData = (await requestDataFromApi(`/motor-shows/${id}`)) as ApiMotorShowNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as MotorShowNode
}
