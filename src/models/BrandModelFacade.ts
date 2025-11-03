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
        await findConnectedCarModels(id)
    }

    static async getConnectedImages(id: number) {
        await findConnectedImages(id)
    }
}
