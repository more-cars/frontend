import {findOutNodeTypeOfNode} from "./nodes/findOutNodeTypeOfNode"

export const NodeModelFacade = {
    async getNodeTypeOfNode(nodeId: number) {
        return findOutNodeTypeOfNode(nodeId)
    },
}
