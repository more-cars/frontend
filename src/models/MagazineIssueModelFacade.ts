import {findAllNodes} from "./node-types/magazine-issues/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/magazine-issues/findNodeById"
import {findConnectedMainImage} from "./node-types/magazine-issues/findConnectedMainImage"
import {findConnectedMagazine} from "./node-types/magazine-issues/findConnectedMagazine"
import {findConnectedPredecessor} from "./node-types/magazine-issues/findConnectedPredecessor"
import {findConnectedSuccessor} from "./node-types/magazine-issues/findConnectedSuccessor"

export const MagazineIssueModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.MAGAZINE_ISSUE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedMagazine(id: number) {
        return findConnectedMagazine(id)
    },

    async getConnectedPredecessor(id: number) {
        return findConnectedPredecessor(id)
    },

    async getConnectedSuccessor(id: number) {
        return findConnectedSuccessor(id)
    },
}
