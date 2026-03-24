import {findAllNodes} from "./node-types/brands/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/brands/findNodeById"
import type {Brand} from "./node-types/brands/types/Brand"
import {getNodeTitle} from "./node-types/brands/getNodeTitle"
import {getNodeSubTitle} from "./node-types/brands/getNodeSubTitle"
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

    getNodeTitle(node: Brand) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: Brand) {
        return getNodeSubTitle(node)
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
