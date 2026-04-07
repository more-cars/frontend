import type {ModelSearchParams} from "./types/ModelSearchParams"
import {findAllNodes} from "./node-types/model-cars/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/model-cars/findNodeById"
import type {ModelCar} from "./node-types/model-cars/types/ModelCar"
import {getNodeTitle} from "./node-types/model-cars/getNodeTitle"
import {getNodeSubTitle} from "./node-types/model-cars/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/model-cars/findConnectedMainImage"
import {findConnectedModelCarBrand} from "./node-types/model-cars/findConnectedModelCarBrand"
import {findConnectedCarModelVariant} from "./node-types/model-cars/findConnectedCarModelVariant"
import {findConnectedImages} from "./node-types/model-cars/findConnectedImages"
import {findConnectedVideos} from "./node-types/model-cars/findConnectedVideos"

export const ModelCarModelFacade = {
    async getAllNodes(params?: ModelSearchParams) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MODEL_CAR)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: ModelCar) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: ModelCar) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedModelCarBrand(id: number) {
        return findConnectedModelCarBrand(id)
    },

    async getConnectedCarModelVariant(id: number) {
        return findConnectedCarModelVariant(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
