import {getAllProgrammes} from "./node-types/programmes/getAllProgrammes"
import {getProgrammeById} from "./node-types/programmes/getProgrammeById"
import {getConnectedMainImage} from "./node-types/programmes/getConnectedMainImage"

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
}
