import type {DataSearchParams} from "./types/DataSearchParams"
import {getAllMagazines} from "./node-types/magazines/getAllMagazines"
import {getMagazineById} from "./node-types/magazines/getMagazineById"
import {getConnectedMainImage} from "./node-types/magazines/getConnectedMainImage"
import {getConnectedMagazineIssues} from "./node-types/magazines/getConnectedMagazineIssues"
import {getConnectedImages} from "./node-types/magazines/getConnectedImages"
import {getConnectedVideos} from "./node-types/magazines/getConnectedVideos"

export const MagazineDataFacade = {
    async getNodeCollection(params?: DataSearchParams) {
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

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedVideoNodes(id: number) {
        return getConnectedVideos(id)
    },
}
