import {Brand} from "../../../models/node-types/brands/types/Brand"
import {BrandModelFacade} from "../../../models/BrandModelFacade"

export async function getBrandThumbnails(brands: Brand[]) {
    const thumbnails = []

    for (const brand of brands) {
        const thumbnail = await BrandModelFacade.getConnectedMainImage(brand.id)
        thumbnails[brand.id] = thumbnail || null
    }

    return thumbnails
}
