import {getAllModelCars} from "./node-types/model-cars/getAllModelCars"

export const ModelCarDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllModelCars(params)
    },
}
