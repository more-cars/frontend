import {findAllNodes} from "./brands/findAllNodes"
import {findNodeById} from "./brands/findNodeById"
import {findConnectedCarModels} from "./brands/findConnectedCarModels"
import {findConnectedImages} from "./brands/findConnectedImages"

export class BrandModelFacade {
    static async getAllNodes() {
        return findAllNodes()
    }

    static async getNodeById(id: number) {
        return findNodeById(id)
    }

    static async getConnectedCarModels(id: number) {
        return await findConnectedCarModels(id)
    }

    static async getConnectedImages(id: number) {
        return await findConnectedImages(id)
    }
}
