import {findAllNodes} from "./node-types/images/findAllNodes"
import {findNodeById} from "./node-types/images/findNodeById"
import {findConnectedBrands} from "./node-types/images/findConnectedBrands"
import {findConnectedCarModels} from "./node-types/images/findConnectedCarModels"

export const ImageModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedBrands(id: number) {
        return await findConnectedBrands(id)
    },

    async getConnectedCarModels(id: number) {
        return await findConnectedCarModels(id)
    },
}
