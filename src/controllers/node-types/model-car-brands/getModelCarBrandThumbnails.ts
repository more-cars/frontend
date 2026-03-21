import {ModelCarBrand} from "../../../models/node-types/model-car-brands/types/ModelCarBrand"
import {Image} from "../../../models/node-types/images/types/Image"
import {ModelCarBrandModelFacade} from "../../../models/ModelCarBrandModelFacade"

export async function getModelCarBrandThumbnails(modelCarBrands: ModelCarBrand[]) {
    const thumbnails = new Map<number, Image | null>

    for (const modelCarBrand of modelCarBrands) {
        thumbnails.set(modelCarBrand.id, await ModelCarBrandModelFacade.getConnectedMainImage(modelCarBrand.id) || null)
    }

    return thumbnails
}
