import {findAllNodes} from "./images/findAllNodes"
import {findNodeById} from "./images/findNodeById"
import {findConnectedBrands} from "./images/findConnectedBrands"
import {findConnectedCarModels} from "./images/findConnectedCarModels"

export class ImageModelFacade {
    static async getAllNodes() {
        return findAllNodes()
    }

    static async getNodeById(id: number) {
        return findNodeById(id)
    }

    static async getConnectedBrands(id: number) {
        await findConnectedBrands(id)
    }

    static async getConnectedCarModels(id: number) {
        await findConnectedCarModels(id)
    }
}
