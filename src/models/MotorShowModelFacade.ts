import {findAllNodes} from "./node-types/motor-shows/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/motor-shows/findNodeById"
import {findConnectedMainImage} from "./node-types/motor-shows/findConnectedMainImage"
import {findConnectedCarModelVariants} from "./node-types/motor-shows/findConnectedCarModelVariants"

export const MotorShowModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MOTOR_SHOW)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedCarModelVariants(id: number) {
        return findConnectedCarModelVariants(id)
    },
}
