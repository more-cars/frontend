import {findAllNodes} from "./node-types/images/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/images/findNodeById"
import type {Image} from "./node-types/images/types/Image"
import {getNodeTitle} from "./node-types/images/getNodeTitle"
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

    getNodeTitle(node: Image) {
        return getNodeTitle(node)
    },

    async getConnectedNodes(id: number) {
        return findConnectedNodes(id)
    },
}
