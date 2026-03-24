import {findOutNodeTypeOfNode} from "./nodes/findOutNodeTypeOfNode"
import {findNodeById} from "./nodes/findNodeById"

export const NodeModelFacade = {
    async getNodeById(nodeId: number) {
        return findNodeById(nodeId)
    },

    async getNodeTypeOfNode(nodeId: number) {
        return findOutNodeTypeOfNode(nodeId)
    },
}
