import type {DataSearchParams} from "./types/DataSearchParams"
import {getAllMagazineIssues} from "./node-types/magazine-issues/getAllMagazineIssues"
import {getMagazineIssueById} from "./node-types/magazine-issues/getMagazineIssueById"
import {getConnectedMainImage} from "./node-types/magazine-issues/getConnectedMainImage"
import {getConnectedMagazine} from "./node-types/magazine-issues/getConnectedMagazine"
import {getConnectedPredecessor} from "./node-types/magazine-issues/getConnectedPredecessor"
import {getConnectedSuccessor} from "./node-types/magazine-issues/getConnectedSuccessor"
import {getConnectedCarModels} from "./node-types/magazine-issues/getConnectedCarModels"
import {getConnectedCarModelVariants} from "./node-types/magazine-issues/getConnectedCarModelVariants"
import {getConnectedRatings} from "./node-types/magazine-issues/getConnectedRatings"
import {getConnectedRacingEvents} from "./node-types/magazine-issues/getConnectedRacingEvents"
import {getConnectedImages} from "./node-types/magazine-issues/getConnectedImages"
import {getConnectedVideos} from "./node-types/magazine-issues/getConnectedVideos"

export const MagazineIssueDataFacade = {
    async getNodeCollection(params?: DataSearchParams) {
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

    async getConnectedRatingNodes(id: number) {
        return getConnectedRatings(id)
    },

    async getConnectedRacingEventNodes(id: number) {
        return getConnectedRacingEvents(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedVideoNodes(id: number) {
        return getConnectedVideos(id)
    },
}
