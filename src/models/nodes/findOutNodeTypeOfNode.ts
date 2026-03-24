import {NodeDataFacade} from "../../data/NodeDataFacade"

export async function findOutNodeTypeOfNode(id: number) {
    const node = await NodeDataFacade.getNodeById(id)

    if (!node) {
        return null
    }

    return node.type
}
