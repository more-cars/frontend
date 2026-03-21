import {getAllModelCarBrands} from "./node-types/model-car-brands/getAllModelCarBrands"
import {getModelCarBrandById} from "./node-types/model-car-brands/getModelCarBrandById"

export const ModelCarBrandDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllModelCarBrands(params)
    },

    async getNodeById(id: number) {
        return getModelCarBrandById(id)
    },
}
