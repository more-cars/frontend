import {getAllProgrammes} from "./node-types/programmes/getAllProgrammes"

export const ProgrammeDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllProgrammes(params)
    },
}
