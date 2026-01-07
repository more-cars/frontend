import {findAllNodes} from "./node-types/car-models/findAllNodes"
import {findNodeById} from "./node-types/car-models/findNodeById"
import {findConnectedBrand} from "./node-types/car-models/findConnectedBrand"
import {findConnectedPredecessor} from "./node-types/car-models/findConnectedPredecessor"
import {findConnectedSuccessor} from "./node-types/car-models/findConnectedSuccessor"
import {findConnectedImages} from "./node-types/car-models/findConnectedImages"
import {findConnectedMainImage} from "./node-types/car-models/findConnectedMainImage"

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

    static async getConnectedPredecessor(id: number) {
        return await findConnectedPredecessor(id)
    }

    static async getConnectedSuccessor(id: number) {
        return await findConnectedSuccessor(id)
    }

    static async getConnectedImages(id: number) {
        return await findConnectedImages(id)
    }

    static async getConnectedMainImage(id: number) {
        return await findConnectedMainImage(id)
    }
}
