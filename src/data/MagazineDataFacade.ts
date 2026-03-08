import {getAllMagazines} from "./node-types/magazines/getAllMagazines"

export const MagazineDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMagazines(params)
    },
}
