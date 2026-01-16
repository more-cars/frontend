import {getAllCarModels} from "./node-types/car-models/getAllCarModels"
import {getCarModelById} from "./node-types/car-models/getCarModelById"
import {getConnectedBrand} from "./node-types/car-models/getConnectedBrand"
import {getConnectedPredecessorCarModel} from "./node-types/car-models/getConnectedPredecessorCarModel"
import {getConnectedSuccessorCarModel} from "./node-types/car-models/getConnectedSuccessorCarModel"
import {getConnectedImages} from "./node-types/car-models/getConnectedImages"
import {getConnectedMainImage} from "./node-types/car-models/getConnectedMainImage"

export class CarModelDataFacade {
    static async getNodeCollection(params?: { page: number }) {
        return getAllCarModels(params)
    }

    static async getNodeById(id: number) {
        return getCarModelById(id)
    }

    static async getConnectedBrandNode(id: number) {
        return getConnectedBrand(id)
    }

    static async getConnectedPredecessorCarModelNode(id: number) {
        return getConnectedPredecessorCarModel(id)
    }

    static async getConnectedSuccessorCarModelNode(id: number) {
        return getConnectedSuccessorCarModel(id)
    }

    static async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    }

    static async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    }
}
