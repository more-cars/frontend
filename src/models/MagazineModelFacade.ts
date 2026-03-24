import {findAllNodes} from "./node-types/magazines/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/magazines/findNodeById"
import type {Magazine} from "./node-types/magazines/types/Magazine"
import {getNodeTitle} from "./node-types/magazines/getNodeTitle"
import {getNodeSubTitle} from "./node-types/magazines/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/magazines/findConnectedMainImage"
import {findConnectedMagazineIssues} from "./node-types/magazines/findConnectedMagazineIssues"
import {findConnectedImages} from "./node-types/magazines/findConnectedImages"

export const MagazineModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MAGAZINE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: Magazine) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: Magazine) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedMagazineIssues(id: number) {
        return findConnectedMagazineIssues(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
