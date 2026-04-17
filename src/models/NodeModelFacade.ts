import {findNodeById} from "./nodes/findNodeById"
import {findMainImagesOfNodes} from "./nodes/findMainImagesOfNodes"
import type {ModelNode} from "./types/ModelNode"
import {getNodeTitle} from "./nodes/getNodeTitle"

export const NodeModelFacade = {
    async getNodeById(nodeId: number) {
        return findNodeById(nodeId)
    },

    async getMainImagesOfNodes(nodeIds: number[]) {
        return findMainImagesOfNodes(nodeIds)
    },

    getNodeTitle(node: ModelNode) {
        return getNodeTitle(node)
    },
}
