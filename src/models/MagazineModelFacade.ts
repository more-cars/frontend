import {findAllNodes} from "./node-types/magazines/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/magazines/findNodeById"

export const MagazineModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MAGAZINE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },
}
