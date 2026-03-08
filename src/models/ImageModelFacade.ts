import {findAllNodes} from "./node-types/images/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/images/findNodeById"
import {findConnectedBrands} from "./node-types/images/findConnectedBrands"
import {findConnectedCarModels} from "./node-types/images/findConnectedCarModels"

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

    async getConnectedBrands(id: number) {
        return findConnectedBrands(id)
    },

    async getConnectedCarModels(id: number) {
        return findConnectedCarModels(id)
    },
}
