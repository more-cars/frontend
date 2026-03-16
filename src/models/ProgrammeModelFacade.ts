import {findAllNodes} from "./node-types/programmes/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/programmes/findNodeById"

export const ProgrammeModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.PROGRAMME)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },
}
