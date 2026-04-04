import {findNodeById} from "./nodes/findNodeById"
import {findMainImagesOfNodes} from "./nodes/findMainImagesOfNodes"

export const NodeModelFacade = {
    async getNodeById(nodeId: number) {
        return findNodeById(nodeId)
    },

    async getMainImagesOfNodes(nodeIds: number[]) {
        return findMainImagesOfNodes(nodeIds)
    },
}
