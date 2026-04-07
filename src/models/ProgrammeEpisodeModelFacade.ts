import type {ModelSearchParams} from "./types/ModelSearchParams"
import {findAllNodes} from "./node-types/programme-episodes/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/programme-episodes/findNodeById"
import type {ProgrammeEpisode} from "./node-types/programme-episodes/types/ProgrammeEpisode"
import {getNodeTitle} from "./node-types/programme-episodes/getNodeTitle"
import {getNodeSubTitle} from "./node-types/programme-episodes/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/programme-episodes/findConnectedMainImage"
import {findConnectedProgramme} from "./node-types/programme-episodes/findConnectedProgramme"
import {findConnectedPredecessor} from "./node-types/programme-episodes/findConnectedPredecessor"
import {findConnectedSuccessor} from "./node-types/programme-episodes/findConnectedSuccessor"
import {findConnectedCarModels} from "./node-types/programme-episodes/findConnectedCarModels"
import {findConnectedCarModelVariants} from "./node-types/programme-episodes/findConnectedCarModelVariants"
import {findConnectedImages} from "./node-types/programme-episodes/findConnectedImages"
import {findConnectedVideos} from "./node-types/programme-episodes/findConnectedVideos"

export const ProgrammeEpisodeModelFacade = {
    async getAllNodes(params?: ModelSearchParams) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.PROGRAMME_EPISODE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: ProgrammeEpisode) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: ProgrammeEpisode) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedProgramme(id: number) {
        return findConnectedProgramme(id)
    },

    async getConnectedPredecessor(id: number) {
        return findConnectedPredecessor(id)
    },

    async getConnectedSuccessor(id: number) {
        return findConnectedSuccessor(id)
    },

    async getConnectedCarModels(id: number) {
        return findConnectedCarModels(id)
    },

    async getConnectedCarModelVariants(id: number) {
        return findConnectedCarModelVariants(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
