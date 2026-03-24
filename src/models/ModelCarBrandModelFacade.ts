import {findAllNodes} from "./node-types/model-car-brands/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/model-car-brands/findNodeById"
import type {ModelCarBrand} from "./node-types/model-car-brands/types/ModelCarBrand"
import {getNodeTitle} from "./node-types/model-car-brands/getNodeTitle"
import {getNodeSubTitle} from "./node-types/model-car-brands/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/model-car-brands/findConnectedMainImage"
import {findConnectedModelCars} from "./node-types/model-car-brands/findConnectedModelCars"
import {findConnectedImages} from "./node-types/model-car-brands/findConnectedImages"

export const ModelCarBrandModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MODEL_CAR_BRAND)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: ModelCarBrand) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: ModelCarBrand) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedModelCars(id: number) {
        return findConnectedModelCars(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
