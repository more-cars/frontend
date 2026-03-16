import {Rating} from "../../../models/node-types/ratings/types/Rating"
import {Image} from "../../../models/node-types/images/types/Image"
import {RatingModelFacade} from "../../../models/RatingModelFacade"

export async function getRatingThumbnails(ratings: Rating[]) {
    const thumbnails = new Map<number, Image | null>

    for (const rating of ratings) {
        thumbnails.set(rating.id, await RatingModelFacade.getConnectedMainImage(rating.id) || null)
    }

    return thumbnails
}
