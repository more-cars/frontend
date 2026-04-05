import {getAllProgrammes} from "./node-types/programmes/getAllProgrammes"
import {getProgrammeById} from "./node-types/programmes/getProgrammeById"
import {getConnectedMainImage} from "./node-types/programmes/getConnectedMainImage"
import {getConnectedProgrammeEpisodes} from "./node-types/programmes/getConnectedProgrammeEpisodes"
import {getConnectedImages} from "./node-types/programmes/getConnectedImages"
import {getConnectedVideos} from "./node-types/programmes/getConnectedVideos"

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

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedVideoNodes(id: number) {
        return getConnectedVideos(id)
    },
}
