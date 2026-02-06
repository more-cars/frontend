import {CarModelVariant} from "../../../models/node-types/car-model-variants/types/CarModelVariant"
import {Image} from "../../../models/node-types/images/types/Image"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"

export async function getCarModelVariantThumbnails(carModelVariants: CarModelVariant[]) {
    const thumbnails = new Map<number, Image | null>

    for (const carModelVariant of carModelVariants) {
        thumbnails.set(carModelVariant.id, await CarModelVariantModelFacade.getConnectedMainImage(carModelVariant.id) || null)
    }

    return thumbnails
}
