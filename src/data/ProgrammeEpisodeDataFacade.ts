import {getAllProgrammeEpisodes} from "./node-types/programme-episodes/getAllProgrammeEpisodes"
import {getProgrammeEpisodeById} from "./node-types/programme-episodes/getProgrammeEpisodeById"
import {getConnectedMainImage} from "./node-types/programme-episodes/getConnectedMainImage"
import {getConnectedProgramme} from "./node-types/programme-episodes/getConnectedProgramme"

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
}
