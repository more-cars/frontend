import {getAllCarModelVariants} from "./node-types/car-model-variants/getAllCarModelVariants"
import {getCarModelVariantById} from "./node-types/car-model-variants/getCarModelVariantById"
import {getConnectedMainImage} from "./node-types/car-model-variants/getConnectedMainImage"

export const CarModelVariantDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllCarModelVariants(params)
    },

    async getNodeById(id: number) {
        return getCarModelVariantById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },
}
