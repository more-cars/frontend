import {findAllNodes} from "./node-types/model-cars/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/model-cars/findNodeById"

export const ModelCarModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MODEL_CAR)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },
}
