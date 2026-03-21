import {getAllModelCars} from "./node-types/model-cars/getAllModelCars"
import {getModelCarById} from "./node-types/model-cars/getModelCarById"
import {getConnectedMainImage} from "./node-types/model-cars/getConnectedMainImage"

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
}
