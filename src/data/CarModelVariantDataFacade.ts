import {getAllCarModelVariants} from "./node-types/car-model-variants/getAllCarModelVariants"

export const CarModelVariantDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllCarModelVariants(params)
    },
}
