import {NodeDataFacade} from "../../data/NodeDataFacade"
import {convertDataNodeToModelNode} from "./convertDataNodeToModelNode"

export async function findNodeById(id: number) {
    const dataNode = await NodeDataFacade.getNodeById(id)

    if (!dataNode) {
        return null
    }

    return convertDataNodeToModelNode(dataNode)
}
