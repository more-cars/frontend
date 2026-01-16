import {findAllNodes} from "./node-types/images/findAllNodes"
import {findNodeById} from "./node-types/images/findNodeById"
import {findConnectedBrands} from "./node-types/images/findConnectedBrands"
import {findConnectedCarModels} from "./node-types/images/findConnectedCarModels"

export class ImageModelFacade {
    static async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    }

    static async getNodeById(id: number) {
        return findNodeById(id)
    }

    static async getConnectedBrands(id: number) {
        return await findConnectedBrands(id)
    }

    static async getConnectedCarModels(id: number) {
        return await findConnectedCarModels(id)
    }
}
