import {findAllNodes} from "./node-types/car-models/findAllNodes"
import {findNodeById} from "./node-types/car-models/findNodeById"
import {findConnectedBrand} from "./node-types/car-models/findConnectedBrand"
import {findConnectedImages} from "./node-types/car-models/findConnectedImages"

export class CarModelModelFacade {
    static async getAllNodes() {
        return findAllNodes()
    }

    static async getNodeById(id: number) {
        return findNodeById(id)
    }

    static async getConnectedBrand(id: number) {
        return await findConnectedBrand(id)
    }

    static async getConnectedImages(id: number) {
        return await findConnectedImages(id)
    }
}
