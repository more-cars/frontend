import {getAllProgrammes} from "./node-types/programmes/getAllProgrammes"
import {getProgrammeById} from "./node-types/programmes/getProgrammeById"
import {getConnectedMainImage} from "./node-types/programmes/getConnectedMainImage"
import {getConnectedProgrammeEpisodes} from "./node-types/programmes/getConnectedProgrammeEpisodes"

export const ProgrammeDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllProgrammes(params)
    },

    async getNodeById(id: number) {
        return getProgrammeById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedProgrammeEpisodeNodes(id: number) {
        return getConnectedProgrammeEpisodes(id)
    },
}
