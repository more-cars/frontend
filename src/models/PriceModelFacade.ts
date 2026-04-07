import type {ModelSearchParams} from "./types/ModelSearchParams"
import {findAllNodes} from "./node-types/prices/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/prices/findNodeById"
import type {Price} from "./node-types/prices/types/Price"
import {getNodeTitle} from "./node-types/prices/getNodeTitle"
import {getNodeSubTitle} from "./node-types/prices/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/prices/findConnectedMainImage"
import {findConnectedCarModelVariant} from "./node-types/prices/findConnectedCarModelVariant"
import {findConnectedImages} from "./node-types/prices/findConnectedImages"

export const PriceModelFacade = {
    async getAllNodes(params?: ModelSearchParams) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.PRICE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: Price) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: Price) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedCarModelVariant(id: number) {
        return findConnectedCarModelVariant(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
