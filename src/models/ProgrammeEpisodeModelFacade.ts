import {findAllNodes} from "./node-types/programme-episodes/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/programme-episodes/findNodeById"
import {findConnectedMainImage} from "./node-types/programme-episodes/findConnectedMainImage"
import {findConnectedProgramme} from "./node-types/programme-episodes/findConnectedProgramme"
import {findConnectedPredecessor} from "./node-types/programme-episodes/findConnectedPredecessor"
import {findConnectedSuccessor} from "./node-types/programme-episodes/findConnectedSuccessor"
import {findConnectedCarModels} from "./node-types/programme-episodes/findConnectedCarModels"

export const ProgrammeEpisodeModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.PROGRAMME_EPISODE)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
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
}
