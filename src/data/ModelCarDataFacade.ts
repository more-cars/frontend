import {getAllModelCars} from "./node-types/model-cars/getAllModelCars"
import {getModelCarById} from "./node-types/model-cars/getModelCarById"
import {getConnectedMainImage} from "./node-types/model-cars/getConnectedMainImage"
import {getConnectedModelCarBrand} from "./node-types/model-cars/getConnectedModelCarBrand"
import {getConnectedCarModelVariant} from "./node-types/model-cars/getConnectedCarModelVariant"
import {getConnectedImages} from "./node-types/model-cars/getConnectedImages"
import {getConnectedVideos} from "./node-types/model-cars/getConnectedVideos"

export const ModelCarDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllModelCars(params)
    },

    async getNodeById(id: number) {
        return getModelCarById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedModelCarBrandNode(id: number) {
        return getConnectedModelCarBrand(id)
    },

    async getConnectedCarModelVariantNode(id: number) {
        return getConnectedCarModelVariant(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedVideoNodes(id: number) {
        return getConnectedVideos(id)
    },
}
