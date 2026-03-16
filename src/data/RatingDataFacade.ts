import {getAllRatings} from "./node-types/ratings/getAllRatings"
import {getRatingById} from "./node-types/ratings/getRatingById"
import {getConnectedMainImage} from "./node-types/ratings/getConnectedMainImage"

export const RatingDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRatings(params)
    },

    async getNodeById(id: number) {
        return getRatingById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },
}
