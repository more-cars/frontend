import {findAllNodes} from "./node-types/car-models/findAllNodes"
import {findNodeById} from "./node-types/car-models/findNodeById"
import {findConnectedBrand} from "./node-types/car-models/findConnectedBrand"
import {findConnectedPredecessor} from "./node-types/car-models/findConnectedPredecessor"
import {findConnectedSuccessor} from "./node-types/car-models/findConnectedSuccessor"
import {findConnectedImages} from "./node-types/car-models/findConnectedImages"
import {findConnectedMainImage} from "./node-types/car-models/findConnectedMainImage"

export const CarModelModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedBrand(id: number) {
        return await findConnectedBrand(id)
    },

    async getConnectedPredecessor(id: number) {
        return await findConnectedPredecessor(id)
    },

    async getConnectedSuccessor(id: number) {
        return await findConnectedSuccessor(id)
    },

    async getConnectedImages(id: number) {
        return await findConnectedImages(id)
    },

    async getConnectedMainImage(id: number) {
        return await findConnectedMainImage(id)
    },
}
