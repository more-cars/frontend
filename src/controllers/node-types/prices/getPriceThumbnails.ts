import {Price} from "../../../models/node-types/prices/types/Price"
import {Image} from "../../../models/node-types/images/types/Image"
import {PriceModelFacade} from "../../../models/PriceModelFacade"

export async function getPriceThumbnails(prices: Price[]) {
    const thumbnails = new Map<number, Image | null>

    for (const price of prices) {
        thumbnails.set(price.id, await PriceModelFacade.getConnectedMainImage(price.id) || null)
    }

    return thumbnails
}
