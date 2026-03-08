import {getAllMagazineIssues} from "./node-types/magazine-issues/getAllMagazineIssues"
import {getMagazineIssueById} from "./node-types/magazine-issues/getMagazineIssueById"
import {getConnectedMainImage} from "./node-types/magazine-issues/getConnectedMainImage"
import {getConnectedMagazine} from "./node-types/magazine-issues/getConnectedMagazine"

export const MagazineIssueDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMagazineIssues(params)
    },

    async getNodeById(id: number) {
        return getMagazineIssueById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedMagazineNode(id: number) {
        return getConnectedMagazine(id)
    },
}
