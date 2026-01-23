import {Brand} from "../../../models/node-types/brands/types/Brand"
import {Image} from "../../../models/node-types/images/types/Image"
import {BrandModelFacade} from "../../../models/BrandModelFacade"

export async function getBrandThumbnails(brands: Brand[]) {
    const thumbnails = new Map<number, Image | null>

    for (const brand of brands) {
        thumbnails.set(brand.id, await BrandModelFacade.getConnectedMainImage(brand.id) || null)
    }

    return thumbnails
}
