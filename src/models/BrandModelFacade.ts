import {findAllNodes} from "./node-types/brands/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/brands/findNodeById"
import {findConnectedCompany} from "./node-types/brands/findConnectedCompany"
import {findConnectedCarModels} from "./node-types/brands/findConnectedCarModels"
import {findConnectedImages} from "./node-types/brands/findConnectedImages"
import {findConnectedMainImage} from "./node-types/brands/findConnectedMainImage"

export const BrandModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.BRAND)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedCompany(id: number) {
        return findConnectedCompany(id)
    },

    async getConnectedCarModels(id: number) {
        return findConnectedCarModels(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },
}
