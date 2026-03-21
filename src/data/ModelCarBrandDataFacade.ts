import {getAllModelCarBrands} from "./node-types/model-car-brands/getAllModelCarBrands"
import {getModelCarBrandById} from "./node-types/model-car-brands/getModelCarBrandById"
import {getConnectedMainImage} from "./node-types/model-car-brands/getConnectedMainImage"
import {getConnectedModelCars} from "./node-types/model-car-brands/getConnectedModelCars"
import {getConnectedImages} from "./node-types/model-car-brands/getConnectedImages"

export const ModelCarBrandDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllModelCarBrands(params)
    },

    async getNodeById(id: number) {
        return getModelCarBrandById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedModelCarNodes(id: number) {
        return getConnectedModelCars(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
