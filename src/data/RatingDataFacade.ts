import type {DataSearchParams} from "./types/DataSearchParams"
import {getAllRatings} from "./node-types/ratings/getAllRatings"
import {getRatingById} from "./node-types/ratings/getRatingById"
import {getConnectedMainImage} from "./node-types/ratings/getConnectedMainImage"
import {getConnectedCarModelVariant} from "./node-types/ratings/getConnectedCarModelVariant"
import {getConnectedMagazineIssue} from "./node-types/ratings/getConnectedMagazineIssue"
import {getConnectedImages} from "./node-types/ratings/getConnectedImages"

export const RatingDataFacade = {
    async getNodeCollection(params?: DataSearchParams) {
        return getAllRatings(params)
    },

    async getNodeById(id: number) {
        return getRatingById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedCarModelVariantNode(id: number) {
        return getConnectedCarModelVariant(id)
    },

    async getConnectedMagazineIssueNode(id: number) {
        return getConnectedMagazineIssue(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
