import {findAllNodes} from "./node-types/videos/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import type {Video} from "./node-types/videos/types/Video"
import {getNodeTitle} from "./node-types/videos/getNodeTitle"

export const VideoModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.VIDEO)
    },

    getNodeTitle(node: Video) {
        return getNodeTitle(node)
    },
}
