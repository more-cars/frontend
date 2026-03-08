import {getAllMagazines} from "./node-types/magazines/getAllMagazines"
import {getMagazineById} from "./node-types/magazines/getMagazineById"

export const MagazineDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMagazines(params)
    },

    async getNodeById(id: number) {
        return getMagazineById(id)
    },
}
