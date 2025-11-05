import {getAllCarModels} from "./node-types/car-models/getAllCarModels"
import {getCarModelById} from "./node-types/car-models/getCarModelById"
import {getConnectedBrand} from "./node-types/car-models/getConnectedBrand"
import {getConnectedImages} from "./node-types/car-models/getConnectedImages"

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

    static async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    }
}
