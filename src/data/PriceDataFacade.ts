import {getAllPrices} from "./node-types/prices/getAllPrices"
import {getPriceById} from "./node-types/prices/getPriceById"
import {getConnectedMainImage} from "./node-types/prices/getConnectedMainImage"

export const PriceDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllPrices(params)
    },

    async getNodeById(id: number) {
        return getPriceById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },
}
