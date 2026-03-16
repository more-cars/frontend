import {getAllProgrammeEpisodes} from "./node-types/programme-episodes/getAllProgrammeEpisodes"

export const ProgrammeEpisodeDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllProgrammeEpisodes(params)
    },
}
