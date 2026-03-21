import {getAllPrices} from "./node-types/prices/getAllPrices"

export const PriceDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllPrices(params)
    },
}
