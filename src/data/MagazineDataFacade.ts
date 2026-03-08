import {getAllMagazines} from "./node-types/magazines/getAllMagazines"
import {getMagazineById} from "./node-types/magazines/getMagazineById"
import {getConnectedMainImage} from "./node-types/magazines/getConnectedMainImage"
import {getConnectedMagazineIssues} from "./node-types/magazines/getConnectedMagazineIssues"

export const MagazineDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMagazines(params)
    },

    async getNodeById(id: number) {
        return getMagazineById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedMagazineIssueNodes(id: number) {
        return getConnectedMagazineIssues(id)
    },
}
