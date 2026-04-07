import type {ModelSearchParams} from "./types/ModelSearchParams"
import {findAllNodes} from "./node-types/images/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/images/findNodeById"
import type {Image} from "./node-types/images/types/Image"
import {getNodeTitle} from "./node-types/images/getNodeTitle"
import {getNodeSubTitle} from "./node-types/images/getNodeSubTitle"
import {findConnectedNodes} from "./node-types/images/findConnectedNodes"

export const ImageModelFacade = {
    async getAllNodes(params?: ModelSearchParams) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.IMAGE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: Image) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: Image) {
        return getNodeSubTitle(node)
    },

    async getConnectedNodes(id: number) {
        return findConnectedNodes(id)
    },
}
