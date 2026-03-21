import {getAllModelCars} from "./node-types/model-cars/getAllModelCars"
import {getModelCarById} from "./node-types/model-cars/getModelCarById"

export const ModelCarDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllModelCars(params)
    },

    async getNodeById(id: number) {
        return getModelCarById(id)
    },
}
