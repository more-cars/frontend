import {getAllPrices} from "./node-types/prices/getAllPrices"
import {getPriceById} from "./node-types/prices/getPriceById"
import {getConnectedMainImage} from "./node-types/prices/getConnectedMainImage"
import {getConnectedCarModelVariant} from "./node-types/prices/getConnectedCarModelVariant"
import {getConnectedImages} from "./node-types/prices/getConnectedImages"

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

    async getConnectedCarModelVariantNode(id: number) {
        return getConnectedCarModelVariant(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
