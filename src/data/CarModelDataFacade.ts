import {getAllCarModels} from "./node-types/car-models/getAllCarModels"
import {getCarModelById} from "./node-types/car-models/getCarModelById"
import {getConnectedBrand} from "./node-types/car-models/getConnectedBrand"
import {getConnectedPredecessorCarModel} from "./node-types/car-models/getConnectedPredecessorCarModel"
import {getConnectedSuccessorCarModel} from "./node-types/car-models/getConnectedSuccessorCarModel"
import {getConnectedImages} from "./node-types/car-models/getConnectedImages"
import {getConnectedMainImage} from "./node-types/car-models/getConnectedMainImage"
import {getConnectedCarModelVariants} from "./node-types/car-models/getConnectedCarModelVariants"

export const CarModelDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllCarModels(params)
    },

    async getNodeById(id: number) {
        return getCarModelById(id)
    },

    async getConnectedBrandNode(id: number) {
        return getConnectedBrand(id)
    },

    async getConnectedPredecessorCarModelNode(id: number) {
        return getConnectedPredecessorCarModel(id)
    },

    async getConnectedSuccessorCarModelNode(id: number) {
        return getConnectedSuccessorCarModel(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedCarModelVariantNodes(id: number) {
        return getConnectedCarModelVariants(id)
    },
}
