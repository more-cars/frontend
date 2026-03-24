import {ModelCar} from "../../../models/node-types/model-cars/types/ModelCar"
import {Image} from "../../../models/node-types/images/types/Image"
import {ModelCarModelFacade} from "../../../models/ModelCarModelFacade"

export async function getModelCarThumbnails(modelCars: ModelCar[]) {
    const thumbnails = new Map<number, Image | null>

    for (const modelCar of modelCars) {
        thumbnails.set(modelCar.fields.id, await ModelCarModelFacade.getConnectedMainImage(modelCar.fields.id) || null)
    }

    return thumbnails
}
