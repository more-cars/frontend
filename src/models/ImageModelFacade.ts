import {findAllNodes} from "./node-types/images/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/images/findNodeById"
import {findConnectedNodes} from "./node-types/images/findConnectedNodes"

export const ImageModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.IMAGE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedNodes(id: number) {
        return findConnectedNodes(id)
    },
}
