import {CarModel} from "../../../models/node-types/car-models/types/CarModel"
import {CarModelModelFacade} from "../../../models/CarModelModelFacade"

export async function getCarModelThumbnails(carModels: CarModel[]) {
    const thumbnails = []

    for (const carModel of carModels) {
        const thumbnail = await CarModelModelFacade.getConnectedMainImage(carModel.id)
        thumbnails[carModel.id] = thumbnail || null
    }

    return thumbnails
}
