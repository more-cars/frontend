import {getAllRatings} from "./node-types/ratings/getAllRatings"

export const RatingDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRatings(params)
    },
}
