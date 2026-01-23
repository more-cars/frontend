import {CarModel} from "../../../models/node-types/car-models/types/CarModel"
import {Image} from "../../../models/node-types/images/types/Image"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"

export async function getCarModelThumbnails(carModels: CarModel[]) {
    const thumbnails = new Map<number, Image | null>

    for (const carModel of carModels) {
        thumbnails.set(carModel.id, await CarModelModelFacade.getConnectedMainImage(carModel.id) || null)
    }

    return thumbnails
}
