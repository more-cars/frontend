import {MotorShowDataFacade} from "../../../data/MotorShowDataFacade"
import {convertMotorShowNode} from "./convertMotorShowNode"

export async function findNodeById(id: number) {
    const node = await MotorShowDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return convertMotorShowNode(node)
}
