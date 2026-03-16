import {getAllProgrammeEpisodes} from "./node-types/programme-episodes/getAllProgrammeEpisodes"
import {getProgrammeEpisodeById} from "./node-types/programme-episodes/getProgrammeEpisodeById"
import {getConnectedMainImage} from "./node-types/programme-episodes/getConnectedMainImage"
import {getConnectedProgramme} from "./node-types/programme-episodes/getConnectedProgramme"
import {getConnectedPredecessor} from "./node-types/programme-episodes/getConnectedPredecessor"
import {getConnectedSuccessor} from "./node-types/programme-episodes/getConnectedSuccessor"
import {getConnectedCarModels} from "./node-types/programme-episodes/getConnectedCarModels"

export const ProgrammeEpisodeDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllProgrammeEpisodes(params)
    },

    async getNodeById(id: number) {
        return getProgrammeEpisodeById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedProgrammeNode(id: number) {
        return getConnectedProgramme(id)
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
}
