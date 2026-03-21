import {getAllModelCarBrands} from "./node-types/model-car-brands/getAllModelCarBrands"

export const ModelCarBrandDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllModelCarBrands(params)
    },
}
