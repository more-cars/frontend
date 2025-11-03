import {findAllNodes} from "./car-models/findAllNodes"
import {findNodeById} from "./car-models/findNodeById"
import {findConnectedBrand} from "./car-models/findConnectedBrand"
import {findConnectedImages} from "./car-models/findConnectedImages"

export class CarModelModelFacade {
    static async getAllNodes() {
        return findAllNodes()
    }

    static async getNodeById(id: number) {
        return findNodeById(id)
    }

    static async getConnectedBrand(id: number) {
        await findConnectedBrand(id)
    }

    static async getConnectedImages(id: number) {
        await findConnectedImages(id)
    }
}
