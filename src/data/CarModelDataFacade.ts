import {getAllCarModels} from "./car-models/getAllCarModels"
import {getCarModelById} from "./car-models/getCarModelById"
import {getConnectedBrand} from "./car-models/getConnectedBrand"
import {getConnectedImages} from "./car-models/getConnectedImages"

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
