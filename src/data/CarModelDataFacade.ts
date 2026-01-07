import {getAllCarModels} from "./node-types/car-models/getAllCarModels"
import {getCarModelById} from "./node-types/car-models/getCarModelById"
import {getConnectedBrand} from "./node-types/car-models/getConnectedBrand"
import {getConnectedSuccessorCarModel} from "./node-types/car-models/getConnectedSuccessorCarModel"
import {getConnectedImages} from "./node-types/car-models/getConnectedImages"
import {getMainImageRelationship} from "./node-types/car-models/getMainImageRelationship"

export class CarModelDataFacade {
    static async getNodeCollection() {
        return getAllCarModels()
    }

    static async getNodeById(id: number) {
        return getCarModelById(id)
    }

    static async getConnectedBrandNode(id: number) {
        return getConnectedBrand(id)
    }

    static async getConnectedSuccessorCarModelNode(id: number) {
        return getConnectedSuccessorCarModel(id)
    }

    static async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    }

    static async fetchMainImageRelationship(id: number) {
        return getMainImageRelationship(id)
    }
}
