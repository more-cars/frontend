import {findAllNodes} from "./node-types/model-car-brands/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/model-car-brands/findNodeById"
import {findConnectedMainImage} from "./node-types/model-car-brands/findConnectedMainImage"

export const ModelCarBrandModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MODEL_CAR_BRAND)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },
}
