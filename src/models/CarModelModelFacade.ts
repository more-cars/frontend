import {findAllNodes} from "./node-types/car-models/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/car-models/findNodeById"
import {findConnectedBrand} from "./node-types/car-models/findConnectedBrand"
import {findConnectedPredecessor} from "./node-types/car-models/findConnectedPredecessor"
import {findConnectedSuccessor} from "./node-types/car-models/findConnectedSuccessor"
import {findConnectedMainImage} from "./node-types/car-models/findConnectedMainImage"
import {findConnectedCarModelVariants} from "./node-types/car-models/findConnectedCarModelVariants"
import {findConnectedMagazineIssues} from "./node-types/car-models/findConnectedMagazineIssues"
import {findConnectedImages} from "./node-types/car-models/findConnectedImages"

export const CarModelModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.CAR_MODEL)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedBrand(id: number) {
        return findConnectedBrand(id)
    },

    async getConnectedPredecessor(id: number) {
        return findConnectedPredecessor(id)
    },

    async getConnectedSuccessor(id: number) {
        return findConnectedSuccessor(id)
    },

    async getConnectedCarModelVariants(id: number) {
        return findConnectedCarModelVariants(id)
    },

    async getConnectedMagazineIssues(id: number) {
        return findConnectedMagazineIssues(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
