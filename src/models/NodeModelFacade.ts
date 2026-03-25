import {findNodeById} from "./nodes/findNodeById"

export const NodeModelFacade = {
    async getNodeById(nodeId: number) {
        return findNodeById(nodeId)
    },
}
