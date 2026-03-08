import {getAllMagazineIssues} from "./node-types/magazine-issues/getAllMagazineIssues"
import {getMagazineIssueById} from "./node-types/magazine-issues/getMagazineIssueById"
import {getConnectedMainImage} from "./node-types/magazine-issues/getConnectedMainImage"
import {getConnectedMagazine} from "./node-types/magazine-issues/getConnectedMagazine"
import {getConnectedPredecessor} from "./node-types/magazine-issues/getConnectedPredecessor"
import {getConnectedSuccessor} from "./node-types/magazine-issues/getConnectedSuccessor"
import {getConnectedCarModels} from "./node-types/magazine-issues/getConnectedCarModels"
import {getConnectedCarModelVariants} from "./node-types/magazine-issues/getConnectedCarModelVariants"

export const MagazineIssueDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMagazineIssues(params)
    },

    async getNodeById(id: number) {
        return getMagazineIssueById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedMagazineNode(id: number) {
        return getConnectedMagazine(id)
    },

    async getConnectedPredecessorNode(id: number) {
        return getConnectedPredecessor(id)
    },

    async getConnectedSuccessorNode(id: number) {
        return getConnectedSuccessor(id)
    },

    async getConnectedCarModelNodes(id: number) {
        return getConnectedCarModels(id)
    },

    async getConnectedCarModelVariantNodes(id: number) {
        return getConnectedCarModelVariants(id)
    },
}
